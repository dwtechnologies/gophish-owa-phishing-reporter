import * as React from 'react';
import { IGroupedList, IGroupedListProps, IGroup } from './GroupedList.types';
import { ScrollToMode } from '../../List';
import { SelectionMode } from '../../utilities/selection/index';
export interface IGroupedListState {
    lastWidth?: number;
    lastSelectionMode?: SelectionMode;
    groups?: IGroup[];
}
export declare class GroupedListBase extends React.Component<IGroupedListProps, IGroupedListState> implements IGroupedList {
    static defaultProps: {
        selectionMode: SelectionMode;
        isHeaderVisible: boolean;
        groupProps: {};
        compact: boolean;
    };
    refs: {
        [key: string]: React.ReactInstance;
    };
    private _classNames;
    private _list;
    private _isSomeGroupExpanded;
    constructor(props: IGroupedListProps);
    scrollToIndex(index: number, measureItem?: (itemIndex: number) => number, scrollToMode?: ScrollToMode): void;
    getStartItemIndexInView(): number;
    UNSAFE_componentWillReceiveProps(newProps: IGroupedListProps): void;
    componentDidMount(): void;
    render(): JSX.Element;
    forceUpdate(): void;
    toggleCollapseAll(allCollapsed: boolean): void;
    private _setGroupsCollapsedState;
    private _renderGroup;
    private _returnOne;
    private _getDefaultGroupItemLimit;
    private _getGroupItemLimit;
    private _getGroupHeight;
    private _getPageHeight;
    private _getGroupKey;
    private _getGroupNestingDepth;
    private _onToggleCollapse;
    private _onToggleSelectGroup;
    private _forceListUpdates;
    private _onToggleSummarize;
    private _getPageSpecification;
    private _computeIsSomeGroupExpanded;
    private _updateIsSomeGroupExpanded;
}
