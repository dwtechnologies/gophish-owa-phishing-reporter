import * as React from 'react';
/**
 * Viewport rectangle dimensions.
 *
 * {@docCategory DetailsList}
 */
export interface IViewport {
    /**
     * Width in pixels.
     */
    width: number;
    /**
     * Height in pixels.
     */
    height: number;
}
export interface IWithViewportState {
    viewport?: IViewport;
}
/**
 * Props interface for the withViewport component.
 *
 * {@docCategory DetailsList}
 */
export interface IWithViewportProps {
    /**
     * Whether or not to use ResizeObserver (if available) to detect
     * and measure viewport on 'resize' events.
     *
     * Falls back to window 'resize' event.
     *
     * @defaultValue false
     */
    skipViewportMeasures?: boolean;
}
/**
 * A decorator to update decorated component on viewport or window resize events.
 *
 * @param ComposedComponent decorated React component reference.
 */
export declare function withViewport<TProps extends {
    viewport?: IViewport;
}, TState>(ComposedComponent: new (props: TProps, ...args: any[]) => React.Component<TProps, TState>): any;
