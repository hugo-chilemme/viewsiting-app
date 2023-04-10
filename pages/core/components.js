
import { ButtonProperties, TitleProperties } from './properties';
import { TouchableOpacity, Text, Image } from 'react-native';

import { Module } from './module';

const Component = {


    /**
     * List of extensions
     */
    Module: Module,


    /**
     * Button(title, onpress, statechange);
     *  Overall Application Behavior
     * 
     *  @param {string} title - That will be displayed
     *  @param {function} onpress - Perform when he presses
     *  @param {bool} enabled - Whether or not it is clickable
     */
    Button: (title, onpress, enabled=true) => {
        
        const handlePress = () => {

            if ( enabled && onpress )
            {

                onpress();

            }

        }
        const stateupdate = () => {

            if ( enabled )
            {

                return ( ButtonProperties.buttonText );

            }
            return ( ButtonProperties.buttonTextDisabled );

        }

        return (
            <TouchableOpacity style={ButtonProperties.button} onPress={handlePress}>
                <Text style={stateupdate()}>{title}</Text>
            </TouchableOpacity>
        );
    },


    /**
     * Title(title, size, styles);
     *  Overall Application Behavior
     * 
     *  @param {string} title - That will be displayed
     *  @param {int} size - Size from 0-7 (0 is the greatest)
     *  @param {object} styles - Additional styling
     */
    Title: (title, size, styles = {}) => {

        if (TitleProperties[size])
        {

            const properties = { ...TitleProperties[size], ...styles }

            return (<Text style={properties}>{title}</Text>)

        }


    },


    /**
     * Image(source, styles);
     *  Overall Application Behavior
     * 
     *  @param {string} source - Image Source
     *      Called with a required => required('icon.png')
     *  @param {object} styles - Additional styling
     */
    Image: (source, styles = {}) => {

        const properties = { ...styles }

        return (<Image style={properties} source={source} />)

    },


}

exports.Component = Component;
