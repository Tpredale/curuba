import {renderComponent, expect} from '../test_helper';
import ChefApp from '../../src/components/ChefApp';

describe ('ChefApp', () =>{
  let component;

  beforeEach(() => {
    component = renderComponent(ChefApp);
  });

  it('has the correct class', () => {
    expect(component).to.have.class('chef');
  });
  });
