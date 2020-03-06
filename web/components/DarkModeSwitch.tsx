import { useColorMode, Switch } from '@chakra-ui/core';

export const DarkModeSwitch = () => {
    const { colorMode, toggleColorMode } = useColorMode();
    const isDark = colorMode === 'dark';
    return <Switch pr="1rem" color="green" isChecked={isDark} onChange={toggleColorMode} />;
};
