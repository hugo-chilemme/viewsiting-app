
import { ButtonProperties, TitleProperties } from './properties';
import { TouchableOpacity, Text, Image } from 'react-native';


const Component = {

    Button: (title, onpress) => {
        
        function handlePress() {

            if (onpress)
            {

                onpress();

            }

        }

        return (
            <TouchableOpacity style={ButtonProperties.button} onPress={handlePress}>
                <Text style={ButtonProperties.buttonText}>{title}</Text>
            </TouchableOpacity>
        );
    },

    Title: (title, size, styles = {}) => {

        // We apply the base style @TitleProperties and additional ones on a case-by-case basis
        const properties = {
            ...styles,
            ...TitleProperties[size]
        }

        return (<Text style={properties}>{title}</Text>)
    },

    Image: (source, props) => {
        const properties = {
            ...props
        }
        return (<Image style={properties} source={source} />)
    }

}

exports.Component = Component;
