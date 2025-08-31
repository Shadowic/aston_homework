import { ThemeSwitcher } from '../../features/ThemeSwitcher/ui/ThemeSwitcher';
import { Button } from '../../shared/ui/Button';

interface HeaderProps {
  onAboutClick: () => void;
}

const Header = ({ onAboutClick }: HeaderProps) => {
  return (
      <header className="header">
        <h1 className="header-title">Хедер</h1>
        <div className="header-btns">
          <ThemeSwitcher />
          <Button
              onClick={onAboutClick}
              variant="outline"
              size="small"
          >
            О проекте
          </Button>
        </div>
      </header>
  );
};

export default Header;
