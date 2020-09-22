import * as React from 'react';
import { IDocumentCardActionsProps, IDocumentCardPreviewProps, IDocumentCardProps, IDocumentCardTitleProps, IDocumentCardActivityProps } from 'office-ui-fabric-react/lib/DocumentCard';
import { IBasePickerProps } from 'office-ui-fabric-react/lib/Pickers';
export interface IPeoplePickerExampleState {
    contextualMenuVisible?: boolean;
    contextualMenuTarget?: HTMLElement;
    isPickerDisabled?: boolean;
}
export interface IFullDocumentCardProps {
    documentCardProps?: IDocumentCardProps;
    documentActionsProps?: IDocumentCardActionsProps;
    documentPreviewProps?: IDocumentCardPreviewProps;
    documentActivityProps?: IDocumentCardActivityProps;
    documentTitleProps?: IDocumentCardTitleProps;
}
export interface IDocumentPickerProps extends IBasePickerProps<IFullDocumentCardProps> {
}
export declare class PickerCustomResultExample extends React.Component<{}, IPeoplePickerExampleState> {
    constructor(props: {});
    render(): JSX.Element;
    private _getTextFromItem;
    private _onDisabledButtonClick;
    private _onFilterChanged;
    private _listContainsDocument;
}
