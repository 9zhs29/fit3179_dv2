// Shared look for every chart. Each chart's spec lives in /specs as readable JSON.
const theme = {
  background: null,
  font: "Inter, system-ui, sans-serif",
  view: { stroke: null },
  axis: {
    labelColor: "#b9b4a6", titleColor: "#b9b4a6", labelFontSize: 12, titleFontSize: 12,
    titleFontWeight: 500, domainColor: "#4a4842", tickColor: "#4a4842", gridColor: "#2c2b27"
  },
  legend: {
    labelColor: "#d8d4c8", titleColor: "#b9b4a6", labelFontSize: 12, titleFontSize: 12,
    titleFontWeight: 500, symbolStrokeWidth: 0
  },
  text: { color: "#e8e4d8", font: "Inter, system-ui, sans-serif" },
  title: { color: "#f2efe6" }
};

const charts = [
  ["#vis-waffle", "specs/01_waffle.vl.json"],
  ["#vis-category", "specs/02_category_bars.vl.json"],
  ["#vis-heatmap", "specs/03_state_heatmap.vl.json"],
  ["#vis-bump", "specs/04_bump.vl.json"],
  ["#vis-choropleth", "specs/05_choropleth_percapita.vl.json"],
  ["#vis-symbols", "specs/06_symbols_slider.vl.json"],
  ["#vis-slope", "specs/07_slope_share.vl.json"],
  ["#vis-marimekko", "specs/08_marimekko_finance.vl.json"],
  ["#vis-flow", "specs/09_flow_copro.vl.json"],
  ["#vis-locations", "specs/10_locations_linked.vl.json"]
];

charts.forEach(([el, spec]) => {
  vegaEmbed(el, spec, { actions: false, config: theme, renderer: "svg" })
    .catch(err => {
      document.querySelector(el).innerHTML = `<p class="err">Chart failed to load: ${err.message}</p>`;
      console.error(spec, err);
    });
});
