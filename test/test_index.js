const Enzyme = require('enzyme');
const Adapter = require('enzyme-adapter-react-16');

Enzyme.configure({ adapter: new Adapter() });

const testContext = require.context('.', true, /_test\.jsx?$/);

testContext.keys().forEach(testContext);
