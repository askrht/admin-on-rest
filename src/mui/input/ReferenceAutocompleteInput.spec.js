import React from 'react';
import assert from 'assert';
import { mount, shallow, render } from 'enzyme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TextInput from './TextInput';
import { ReferenceAutocompleteInput } from './ReferenceAutocompleteInput';
import sinon from 'sinon';
import TestUtils from 'react-addons-test-utils';

const muiTheme = getMuiTheme({
    userAgent: false,
});

describe('<ReferenceAutocompleteInput />', () => {
    const defaultProps = {
        source: 'foo',
        meta: {},
        input: {},
        children: React.createElement("TextInput"),
        crudGetMatching: f => f,
        crudGetOne: f => f,
        includesLabel: true,
        reference: 'bar',
        resource: 'cow'
    };

    const inputProps = {
        source: 'alpha',
        meta: {},
        input: {},
    };

    it('renders the child element', () => {
        const wrapper = shallow(<MuiThemeProvider muiTheme={muiTheme}>
            <ReferenceAutocompleteInput {...defaultProps} input={{ id: 'ethan' }} label="hello">
                <TextInput {...inputProps} input={{ id: 'alpha' }}/>
            </ReferenceAutocompleteInput>
        </MuiThemeProvider>);
        const inputElement = wrapper.find('TextInput');
        assert.equal(inputElement.length, 1);
    });

    it('should render an input of type text by default', () => {
        const wrapper = render(<MuiThemeProvider muiTheme={muiTheme}>
            <ReferenceAutocompleteInput {...defaultProps} input={{ id: 'foo' }} />
        </MuiThemeProvider>);
        const inputs = wrapper.find('input');
        assert.equal(inputs.length, 1);
        const input = inputs.first();
        assert.equal(input.attr('type'), 'text');
    });

});
