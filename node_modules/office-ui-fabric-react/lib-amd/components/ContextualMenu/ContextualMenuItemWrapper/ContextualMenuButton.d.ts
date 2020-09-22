import { ContextualMenuItemWrapper } from './ContextualMenuItemWrapper';
export declare class ContextualMenuButton extends ContextualMenuItemWrapper {
    private _btn;
    private _getMemoizedMenuButtonKeytipProps;
    render(): JSX.Element;
    protected _getSubmenuTarget: () => HTMLElement | undefined;
}
