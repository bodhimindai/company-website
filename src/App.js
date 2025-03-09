"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var react_router_dom_1 = require("react-router-dom");
var AppRoutes_1 = require("./routes/AppRoutes");
var Layout_1 = require("./components/Layout");
function App() {
    return (<react_router_dom_1.BrowserRouter>
      <Layout_1.default>
        <AppRoutes_1.default />
      </Layout_1.default>
    </react_router_dom_1.BrowserRouter>);
}
exports.default = App;
