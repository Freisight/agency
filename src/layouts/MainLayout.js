// Import MobX
import { observer } from 'mobx-react-lite';

// Components for this layout
import Menu from '@/components/common/menu/Menu';

const MainLayout = ({ children, data }) => {
  return (
    <>
      <Menu menuData={data.topMenu} timeData={data.interface.time}></Menu>
      <div>{children}</div>
    </>
  );
};

export default observer(MainLayout);
