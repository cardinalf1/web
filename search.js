const fs = require('fs');

const files = ['assets/index-C8M_MwDL.js', 'assets/index-CLylg5YB.js'];
const keywords = ['Raghav', 'Kulkarni', 'F1Car', 'mapupscaled', 'Three', 'Systems', 'MISSION', 'Further Beyond'];

files.forEach(file => {
  console.log(`\nAnalyzing ${file}:`);
  try {
    const content = fs.readFileSync(file, 'utf8');
    keywords.forEach(keyword => {
      const indices = [];
      let idx = content.indexOf(keyword);
      while (idx !== -1) {
        indices.push(idx);
        idx = content.indexOf(keyword, idx + 1);
      }
      if (indices.length > 0) {
        console.log(`  Keyword "${keyword}" found ${indices.length} times.`);
        // Print snippet around first occurrence
        const start = Math.max(0, indices[0] - 100);
        const end = Math.min(content.length, indices[0] + 100);
        console.log(`    Snippet: ... ${content.substring(start, end).replace(/\n/g, ' ')} ...`);
      } else {
        console.log(`  Keyword "${keyword}" NOT found.`);
      }
    });
  } catch (err) {
    console.error(`Error reading ${file}:`, err);
  }
});
