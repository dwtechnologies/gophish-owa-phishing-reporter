import * as React from 'react';
import { IStackProps } from 'office-ui-fabric-react';
export interface IExampleOptions {
    numItems: number;
    showBoxShadow: boolean;
    preventOverflow: boolean;
    wrap: boolean;
    wrapperWidth: number;
    disableShrink: boolean;
    columnGap: number;
    rowGap: number;
    paddingLeft: number;
    paddingRight: number;
    paddingTop: number;
    paddingBottom: number;
    horizontalAlignment: IStackProps['horizontalAlign'];
    verticalAlignment: IStackProps['verticalAlign'];
    hideEmptyChildren: boolean;
    emptyChildren: string[];
}
export declare class HorizontalStackConfigureExample extends React.Component<{}, IExampleOptions> {
    state: IExampleOptions;
    private _horizontalAlignmentOptions;
    private _verticalAlignmentOptions;
    render(): JSX.Element;
    private _onNumItemsChange;
    private _onBoxShadowChange;
    private _onPreventOverflowChange;
    private _onWrapChange;
    private _onShrinkChange;
    private _onWrapperWidthChange;
    private _onGapChange;
    private _onVerticalGapChange;
    private _onPaddingLeftChange;
    private _onPaddingRightChange;
    private _onPaddingTopChange;
    private _onPaddingBottomChange;
    private _onHorizontalAlignChange;
    private _onVerticalAlignChange;
    private _onHideEmptyChildrenChange;
    private _onEmptyChildrenChange;
}
