// Sample data for heatmap
const heatmapData = [
  { company: 'A2I.ai', headquarters: 'Bengaluru', sectors: 'Retail, healthcare, education', value: 5 },
  { company: 'Able.ai', headquarters: 'Mumbai', sectors: 'Marketing, customer service, sales', value: 3 },
  { company: 'Artificial Foundry', headquarters: 'Bengaluru', sectors: 'Media and entertainment, e-commerce, gaming', value: 4 },
  // Add more data points as needed
];

// Function to create the heatmap using D3.js
function createHeatmap(data) {
  const width = 800;
  const height = 400;

  const svg = d3.select('#heatmap-container')
    .append('svg')
    .attr('width', width)
    .attr('height', height);

  // Your heatmap rendering code using D3.js goes here

  // Example: Create rectangles for each data point
  const rectangles = svg.selectAll('rect')
    .data(data)
    .enter()
    .append('rect')
    .attr('x', (d, i) => i * (width / data.length))
    .attr('y', 50)
    .attr('width', width / data.length)
    .attr('height', 50)
    .attr('fill', d => getColor(d.value));

  // Example: Add tooltips for company details
  rectangles.append('title')
    .text(d => `${d.company}\nHeadquarters: ${d.headquarters}\nSectors: ${d.sectors}`);
}

// Function to get color based on value (customize as needed)
function getColor(value) {
  // Example: Return a color gradient based on the value
  return `rgb(${value * 50}, 0, 0)`;
}

// Call the function to create the heatmap
createHeatmap(heatmapData);
