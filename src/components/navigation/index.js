import Button from '../../components/button';
import { useExport } from '../../hooks/useExport';

export default function Navigation() {

  const { logo } = useExport();

  return (
    <>
      <nav className="flex justify-between px-3 py-3 sm:px-12 sm:py-4">
        <img
          src={logo}
          className="w-34 h-6"
          alt="logo"
        />

        <Button
          text="Connect"
        />

      </nav>
    </>
  )
}