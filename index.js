import base from '@mdx-deck/themes/base'

export const webgo = {
	...base,
	Slide : {
		'& > div' : {
			'& > div' : {
				'& > *:not(.cover)' : {
					'&:after' : {
						content          : '""',
						background       : 'url(logo.svg)',
						backgroundRepeat : 'no-repeat',
						backgroundSize   : '100%',
						height           : '60px',
						width            : '200px',
						position         : 'absolute',
						top              : '24px',
						left             : '24px',
						zIndex           : '20'
					}
				}
			}
		}
	}
}
