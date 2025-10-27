// Coding quest from Appier 20251027
import fs from "fs";
import readline from "readline";

async function findTop20(filePath) {
  const nums = [];

  const fileStream = fs.createReadStream(filePath);
  const rl = readline.createInterface({
    input: fileStream,
    crlfDelay: Infinity,
  });

  for await (const line of rl) {
    const num = Number(line.trim());
    if (isNaN(num)) continue;

    if (nums.length < 20) {
      nums.push(num);
    } else {
      const min = Math.min(...nums);
      if (num > min) {
        nums[nums.indexOf(min)] = num;
      }
    }
  }

  nums.sort((a, b) => b - a);
  console.log("Top 20 largest numbers:", nums);
}

findTop20("fileA.txt");
