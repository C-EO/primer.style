// Extends Link from primer/components to make color primitives available. Ideally I'd use defaultProps here but because we use !important on utilities the theme colors won't override. We could probably add a function to handle this.

import {Link, themeGet} from '@primer/components'
import {display} from 'styled-system'
import styled from 'styled-components'

const LinkLight = styled(Link)`
  color: ${themeGet('colors.blue.3')} !important;
  ${display};
`

LinkLight.defaultProps = {
  color: 'blue.2'
}

export default LinkLight
