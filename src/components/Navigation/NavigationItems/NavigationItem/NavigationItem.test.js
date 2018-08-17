/** @format */

import React from 'react';

import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { NavLink } from 'react-router-dom';

import NavigationItem from 'components/Navigation/NavigationItems/NavigationItem/NavigationItem';

configure({ adapter: new Adapter() });

describe('<NavigationItem />', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = shallow(<NavigationItem />);
    });

    it('should render <NavLink/>', () => {
        expect(wrapper.find(NavLink)).toHaveLength(1);
    });

    // it('should render three <NavigationItem /> elements if authenticated', () => {
    //     // wrapper = shallow(<NavigationItems isAuthenticated />);
    //     wrapper.setProps({ isAuthenticated: true });
    //     expect(wrapper.find(NavigationItem)).toHaveLength(3);
    // });

    // it('should an exact logout button', () => {
    //     wrapper.setProps({ isAuthenticated: true });
    //     expect(
    //         wrapper.contains(
    //             <NavigationItem link="/logout">Logout</NavigationItem>,
    //         ),
    //     ).toEqual(true);
    // });
});
