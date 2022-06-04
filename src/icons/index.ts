const svgRequire = require.context('./svgIcon',false,/\.svg$/);

svgRequire.keys().map(svgRequire);

