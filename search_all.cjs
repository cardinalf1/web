const fs = require('fs');

const content = fs.readFileSync('assets/index-CLylg5YB.js', 'utf8');

const targets = ['neel', 'raghav', 'manthan', 'nischal', 'personnel', 'manifest'];

targets.forEach(target => {
  const regex = new RegExp(target, 'gi');
  const matches = [];
  let match;
  while ((match = regex.exec(content)) !== null) {
    matches.push(match.index);
  }
  console.log(`Target "${target}": found ${matches.length} matches.`);
  if (matches.length > 0) {
    matches.forEach(idx => {
      console.log(`  at index ${idx}: ... ${content.substring(idx - 50, idx + 100).replace(/\n/g, ' ')} ...`);
    });
  }
});
