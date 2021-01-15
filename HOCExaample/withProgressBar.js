
import React from "react";
import { ProgressBar, Colors } from 'react-native-paper';
const withProgressBar = (Comp) => ({ isLoading, children, ...props }) => {
    if (isLoading) {
        return <ProgressBar style={{ height: 20, marginTop: 50 }} progress={0.9} color={Colors.red800} visible={isLoading} />
    } else {
        return <Comp {...props}>{children}</Comp>;
    }
};

export default withProgressBar;