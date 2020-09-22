import * as React from 'react';
export interface IAnnouncedLazyLoadingExampleState {
    /** Number of photos loaded so far */
    total: number;
    announced?: JSX.Element;
    loading: boolean;
    timeSinceLastAnnounce: number;
}
export interface IAnnouncedLazyLoadingExampleProps {
}
export declare class AnnouncedLazyLoadingExample extends React.Component<IAnnouncedLazyLoadingExampleProps, IAnnouncedLazyLoadingExampleState> {
    private _photos;
    private _async;
    constructor(props: {});
    componentDidMount(): void;
    render(): JSX.Element;
    componentWillUnmount(): void;
    private _startLoading;
    private _pauseLoading;
    private _createPhotos;
    private _renderPhotos;
}
