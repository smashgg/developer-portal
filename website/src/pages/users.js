import { useEffect } from 'react';

export default function Users() {
  useEffect(() => {
    window.location.replace('/projects');
  }, []);
  return null;
}
