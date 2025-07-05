import { Link } from 'react-router-dom';
import { useAbility } from '../contexts';

export function PermissionLink({ to, subject, children, className }) {
  const ability = useAbility();

  const canAccess =
    ability?.can('read', subject) || ability?.can('manage', subject);

  // disabled 效果
  const styles = {
    pointerEvents: canAccess ? 'auto' : 'none',
    opacity: canAccess ? 1 : 0.5,
    textDecoration: 'none',
    marginRight: '1rem',
  };

  if (!canAccess) {
    return null;
  }

  return (
    <Link to={to} style={styles} className={className}>
      {children}
    </Link>
  );
}
