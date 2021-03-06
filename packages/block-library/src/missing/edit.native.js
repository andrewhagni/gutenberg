/**
 * External dependencies
 */
import { View, Text } from 'react-native';

/**
 * WordPress dependencies
 */
import { Icon } from '@wordpress/components';
import { coreBlocks } from '@wordpress/block-library';
import { normalizeIconObject } from '@wordpress/blocks';
import { Component } from '@wordpress/element';
import { __, sprintf } from '@wordpress/i18n';

/**
 * Internal dependencies
 */
import styles from './style.scss';

export default class UnsupportedBlockEdit extends Component {
	render() {
		const { originalName } = this.props.attributes;
		const blockType = coreBlocks[ originalName ];
		const title = blockType ? blockType.settings.title : __( 'Unsupported' );
		const icon = blockType ? normalizeIconObject( blockType.settings.icon ) : 'admin-plugins';

		return (
			<View style={ styles.unsupportedBlock }
				accessible={ true }
				accessibilityLabel={
					blockType ?
						sprintf(
							/* translators: accessibility text. %s: unsupported block type. */
							__( 'Unsupported block: %s' ),
							title
						) :
						/* translators: accessibility text. */
						__( 'Unsupported block' )
				}
				onAccessibilityTap={ this.props.onFocus }
			>
				<Icon className="unsupported-icon" icon={ icon && icon.src ? icon.src : icon } />
				<Text style={ styles.unsupportedBlockMessage }>{ title }</Text>
			</View>
		);
	}
}
