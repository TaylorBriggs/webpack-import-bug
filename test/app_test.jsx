import { mount } from 'enzyme';
import React from 'react';

import App from 'app';
import AsyncComponent from 'async_component';

describe('<App />', function() {
  it('is in a loading state by default', function() {
    let wrapper = mount(<App />);

    expect(wrapper.text()).to.include('Loading...');

    wrapper.unmount();
  });

  it('loads the AsyncComponent', function() {
    let wrapper = mount(<App />);
    wrapper.update();

    expect(wrapper.find(AsyncComponent)).to.have.lengthOf(1);

    wrapper.unmount();
  });
});
