import {renderComponent, expect} from '../test_helper';
import App from '../../src/components/App';

describe('App', () => {


  it('shows a navbar', () => {

    const component = renderComponent(App);

    expect(component.find('.navbar')).to.exist;
  });
});
