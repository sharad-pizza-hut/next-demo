/* eslint-disable jsx-a11y/anchor-has-content */
import { string, object, oneOfType, bool, func } from 'prop-types'
import React, { forwardRef } from 'react';
import clsx from 'clsx';
import { useRouter } from 'next/router';
import NextLink from 'next/link';
import MuiLink from '@material-ui/core/Link';

const NextComposed = forwardRef(function NextComposed(props, ref) {
  const { as, href, prefetch, ...other } = props;

  return (
    <NextLink href={href} prefetch={prefetch} as={as}>
      <a ref={ref} {...other} />
    </NextLink>
  );
});

NextComposed.propTypes = {
  as: oneOfType([string, object]),
  href: oneOfType([string, object]),
  prefetch: bool,
};

// A styled version of the Next.js Link component:
// https://nextjs.org/docs/#with-link
function Link(props) {
  const {
    href,
    activeClassName = 'active',
    className: classNameProps,
    innerRef,
    naked,
    ...other
  } = props;

  const router = useRouter();
  const pathname = typeof href === 'string' ? href : href.pathname;
  const className = clsx(classNameProps, {
    [activeClassName]: router.pathname === pathname && activeClassName,
  });

  if (naked) {
    return <NextComposed className={className} ref={innerRef} href={href} {...other} />;
  }

  return (
    <MuiLink component={NextComposed} className={className} ref={innerRef} href={href} {...other} />
  );
}

Link.propTypes = {
  activeClassName: string,
  as: oneOfType([string, object]),
  className: string,
  href: oneOfType([string, object]),
  innerRef: oneOfType([func, object]),
  naked: bool,
  onClick: func,
  prefetch: bool,
};

export default forwardRef((props, ref) => <Link {...props} innerRef={ref} />);
