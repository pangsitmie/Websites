import * as React from 'react';
import { TitleSettingLayout } from '../item/Title/provider';
import { Route, Redirect } from 'react-router-dom';

interface PropsI {
    exact?: boolean;
    path: string;
    component: () => JSX.Element;
}

export default function PrivateRoute(props: PropsI): JSX.Element {
    const { exact, component: Component } = props;

    return (
        <Route exact={exact}>
            <TitleSettingLayout />
            <Component />
        </Route>
    );
}
