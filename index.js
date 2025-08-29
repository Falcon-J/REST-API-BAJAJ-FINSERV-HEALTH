const express = require("express");
const app = express();
app.use(express.json());

// Change these to your actual details
const FULL_NAME = "omkar_umesh_jawalikar"; // lowercase, underscores
const DOB = "12042004"; // ddmmyyyy
const EMAIL = "omkarjawaliakar04@gmail.com";
const ROLL_NUMBER = "22BCE2223";

function isNumber(str) {
  return /^\d+$/.test(str);
}

function isAlpha(str) {
  return /^[a-zA-Z]+$/.test(str);
}

function isSpecial(str) {
  return !isNumber(str) && !isAlpha(str);
}

function toAlternatingCaps(str) {
  let result = "";
  let upper = true;
  for (let c of str) {
    if (/[a-zA-Z]/.test(c)) {
      result += upper ? c.toUpperCase() : c.toLowerCase();
      upper = !upper;
    } else {
      result += c;
    }
  }
  return result;
}

app.get("/bfhl", (req, res) => {
  res.status(200).json({
    operation_code: 1,
  });
});

app.post("/bfhl", (req, res) => {
  try {
    const data = req.body.data;
    if (!Array.isArray(data)) {
      return res
        .status(400)
        .json({ is_success: false, message: "Invalid input" });
    }
    let even_numbers = [],
      odd_numbers = [],
      alphabets = [],
      special_characters = [],
      sum = 0,
      alpha_concat = "";
    for (let item of data) {
      if (isNumber(item)) {
        if (parseInt(item) % 2 === 0) {
          even_numbers.push(item);
        } else {
          odd_numbers.push(item);
        }
        sum += parseInt(item);
      } else if (isAlpha(item)) {
        alphabets.push(item.toUpperCase());
        alpha_concat += item;
      } else if (typeof item === "string" && item.length > 0) {
        // Could be a mix, so check each char
        let isAllAlpha = true,
          isAllNum = true;
        for (let c of item) {
          if (!/[a-zA-Z]/.test(c)) isAllAlpha = false;
          if (!/[0-9]/.test(c)) isAllNum = false;
        }
        if (isAllAlpha) {
          alphabets.push(item.toUpperCase());
          alpha_concat += item;
        } else if (isAllNum) {
          if (parseInt(item) % 2 === 0) {
            even_numbers.push(item);
          } else {
            odd_numbers.push(item);
          }
          sum += parseInt(item);
        } else {
          special_characters.push(item);
        }
      } else {
        special_characters.push(item);
      }
    }
    // Build concat_string: all alpha chars, reverse, alternating caps
    let allAlphaChars = alpha_concat.split("").reverse().join("");
    let concat_string = toAlternatingCaps(allAlphaChars);
    res.status(200).json({
      is_success: true,
      user_id: `${FULL_NAME}_${DOB}`,
      email: EMAIL,
      roll_number: ROLL_NUMBER,
      odd_numbers,
      even_numbers,
      alphabets,
      special_characters,
      sum: sum.toString(),
      concat_string,
    });
  } catch (e) {
    res.status(500).json({ is_success: false, message: "Server error" });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
