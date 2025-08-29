// Test all examples from the question paper
const http = require("http");

const testCases = [
  {
    name: "Example A",
    data: ["a", "1", "334", "4", "R", "$"],
    expected_sum: "339",
    expected_concat: "Ra",
  },
  {
    name: "Example B",
    data: ["2", "a", "y", "4", "&", "-", "*", "5", "92", "b"],
    expected_sum: "103",
    expected_concat: "ByA",
  },
  {
    name: "Example C",
    data: ["A", "ABcD", "DOE"],
    expected_sum: "0",
    expected_concat: "EoDdCbAa",
  },
];

function testAPI(testCase) {
  return new Promise((resolve, reject) => {
    const postData = JSON.stringify({ data: testCase.data });

    const options = {
      hostname: "localhost",
      port: 3000,
      path: "/bfhl",
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Content-Length": Buffer.byteLength(postData),
      },
    };

    const req = http.request(options, (res) => {
      let data = "";

      res.on("data", (chunk) => {
        data += chunk;
      });

      res.on("end", () => {
        try {
          const jsonResponse = JSON.parse(data);
          console.log(`\n=== ${testCase.name} ===`);
          console.log("Input:", JSON.stringify(testCase.data));
          console.log("Response:", JSON.stringify(jsonResponse, null, 2));

          // Validate key fields
          console.log(
            `✅ Sum: ${jsonResponse.sum} (expected: ${testCase.expected_sum})`
          );
          console.log(
            `✅ Concat: ${jsonResponse.concat_string} (expected: ${testCase.expected_concat})`
          );

          resolve(jsonResponse);
        } catch (e) {
          reject(e);
        }
      });
    });

    req.on("error", (e) => {
      reject(e);
    });

    req.write(postData);
    req.end();
  });
}

async function runAllTests() {
  console.log("🚀 Testing BFHL API with all examples from question paper...\n");

  for (const testCase of testCases) {
    try {
      await testAPI(testCase);
      await new Promise((resolve) => setTimeout(resolve, 100)); // Small delay
    } catch (error) {
      console.error(`❌ Error testing ${testCase.name}:`, error.message);
    }
  }

  console.log("\n✅ All tests completed!");
}

runAllTests();
