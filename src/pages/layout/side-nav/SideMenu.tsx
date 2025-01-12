import { BulbOutlined, HomeOutlined, ProductOutlined, ProfileOutlined, QuestionCircleOutlined, SettingOutlined, UserOutlined } from "@ant-design/icons";
import { Menu, MenuProps } from "antd";
import Sider from "antd/es/layout/Sider";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

type MenuItem = Required<MenuProps>['items'][number];

interface Props {
    collapsed: boolean;
    toggleSideNav: any;
};

const SideMenu = ({ collapsed, toggleSideNav }: Props) => {
    const location = useLocation();
    const [selectedKeys, setSelectedKeys]: any = useState<string[]>();
    const { pathname } = location || { pathname: '/' };
    const screenWidth = window.outerWidth;
    const [sideNavs, setSideNavs] = useState<any[]>();

    useEffect(() => {
        let keys: string[] = location.pathname.split("/");
        keys = keys.length >= 3 ? [`/${keys[1]}`, `/${keys[1]}/${keys[2]}`] : [`/${keys[1]}`];
        setSelectedKeys(keys);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [pathname]);

    const getIcon = (iconName: string) => {
        switch (iconName) {
            case 'UserOutlined':
                return <UserOutlined />;
            case 'ProductOutlined':
                return <ProductOutlined />;
            case 'SettingOutlined':
                return <SettingOutlined />;
            case 'QuestionCircleOutlined':
                return <QuestionCircleOutlined />;
            case 'HomeOutlined':
                return <HomeOutlined />;
            case 'BulbOutlined':
                return <BulbOutlined />;
            case 'ProfileOutlined':
                return <ProfileOutlined />;
            default:
                return <SettingOutlined />;
        }
    }

    const getItem = (
        label: React.ReactNode,
        key: React.Key,
        icon?: React.ReactNode,
        children?: MenuItem[],
        type?: 'group',
    ): MenuItem => {
        return {
            key,
            icon,
            children,
            label,
            type,
        } as MenuItem;
    }

    const sideNavi = [
        {
            id: 1,
            name: 'Products',
            route: '/products',
            order: 1,
            icon: 'ProductOutlined',
            parentId: null,
        },
        {
            id: 11,
            name: 'Product Listing',
            route: '/product-listing',
            order: 1,
            icon: 'ProductOutlined',
            parentId: 1,
        },
        {
            id: 12,
            name: 'Product Categories',
            route: '/product-categories',
            order: 2,
            icon: 'ProductOutlined',
            parentId: 1,
        },
        {
            id: 13,
            name: 'Product Tags',
            route: '/product-tags',
            order: 2,
            icon: 'ProductOutlined',
            parentId: 1,
        },
        {
            id: 14,
            name: 'Product Sizes',
            route: '/product-sizes',
            order: 2,
            icon: 'ProductOutlined',
            parentId: 1,
        },
        {
            id: 15,
            name: 'Product Finishes',
            route: '/product-finishes',
            order: 2,
            icon: 'ProductOutlined',
            parentId: 1,
        },
        {
            id: 3,
            name: 'Menu',
            route: '/menu',
            order: 3,
            icon: 'SettingOutlined',
            parentId: null,
        },
        {
            id: 31,
            name: 'Menu Settings',
            route: '/menu-settings',
            order: 1,
            icon: 'SettingOutlined',
            parentId: 3
        },
        // {
        //     id: 32,
        //     name: 'Menu Listing Settings',
        //     route: '/menu-listing-settings',
        //     order: 1,
        //     icon: 'SettingOutlined',
        //     parentId: 3
        // },
        {
            id: 4,
            name: 'FAQ',
            route: '/faq',
            order: 5,
            icon: 'QuestionCircleOutlined',
            parentId: null,
        },
        {
            id: 41,
            name: 'FAQ Settings',
            route: '/faq-settings',
            order: 1,
            icon: 'SettingOutlined',
            parentId: 4
        },
        {
            id: 42,
            name: 'FAQ Section Settings',
            route: '/faq-section-settings',
            order: 2,
            icon: 'SettingOutlined',
            parentId: 4
        },
        {
            id: 5,
            name: 'Home',
            route: '/home',
            order: 5,
            icon: 'HomeOutlined',
            parentId: null,
        },
        {
            id: 51,
            name: 'Banners',
            route: '/banners',
            order: 5,
            icon: 'HomeOutlined',
            parentId: 5,
        },
        {
            id: 52,
            name: 'Partners',
            route: '/partners',
            order: 5,
            icon: 'HomeOutlined',
            parentId: 5,
        },
        {
            id: 53,
            name: 'Company Info',
            route: '/company-info',
            order: 5,
            icon: 'HomeOutlined',
            parentId: 5,
        },
        {
            id: 2,
            name: 'Inspirations',
            route: '/inspiration',
            order: 4,
            icon: 'BulbOutlined',
            parentId: null,
        },
        {
            id: 21,
            name: 'Inspiration Settings',
            route: '/inspiration-settings',
            order: 4,
            icon: 'BulbOutlined',
            parentId: 2,
        },
        {
            id: 6,
            name: 'Projects',
            route: '/projects',
            order: 4,
            icon: 'ProfileOutlined',
            parentId: null,
        },
        {
            id: 6,
            name: 'Project Settings',
            route: '/project-settings',
            order: 4,
            icon: 'ProfileOutlined',
            parentId: 6,
        },
        {
            id: 7,
            name: 'About Us',
            route: '/about-us-settings',
            order: 1,
            icon: 'SettingOutlined',
            parentId: null
        },
    ]

    useEffect(() => {
        if (sideNavi.length > 0) {
            const sortedData = sideNavi
            const parentSideNavs: any[] = sortedData.filter(sn => !sn.parentId);
            const nestedSideNav: any[] = parentSideNavs.map(sn => {
                const parentSideNav = { ...sn };
                parentSideNav.child = sortedData.filter(c => c.parentId === sn.id);
                return parentSideNav;
            });
            setSideNavs(nestedSideNav);
        } // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const items: any[] = sideNavs?.map(s => {
        if (s.child && s.child.length > 0) {
            return getItem(s.name, s.route, getIcon(s.icon), s.child.map((child: any) => {
                return getItem(<Link to={child.route}> {child.name}</Link>, child.route);
            }));
        }
        return getItem(<Link to={s.route}>{s.name}</Link>, s.route, getIcon(s.icon));
    }) || [];

    const handleMenuItemClick = () => {
        if (screenWidth <= 768) {
            toggleSideNav();
        }
    }

    return (
        <Sider
            width={256}
            collapsible
            collapsedWidth={window.outerWidth < 768 ? 0 : 80}
            collapsed={collapsed}
            trigger={null}
            theme="dark"
            className={collapsed ? "slider-container-collapse" : "slider-container"}
            style={{ textAlign: 'left' }}
        >
            {/* <div className={collapsed ? 'small-logo' : 'side-nav-logo'}>
            <img src={smallIcon} alt="small-icon" />
        </div> */}
            <Menu
                mode="inline"
                theme="light"
                defaultSelectedKeys={['/']}
                selectedKeys={selectedKeys}
                onOpenChange={setSelectedKeys}
                openKeys={selectedKeys}
                items={items}
                onClick={handleMenuItemClick}
            />
            {/* <div className="version-text" style={{ textAlign: "center" }}>
            v {packageJson.version}
        </div> */}
        </Sider>
    )
}

export default SideMenu;
