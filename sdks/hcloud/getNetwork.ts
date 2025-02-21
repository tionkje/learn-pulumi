// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

/**
 * ## Example Usage
 *
 * <!--Start PulumiCodeChooser -->
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as hcloud from "@pulumi/hcloud";
 *
 * const network1 = hcloud.getNetwork({
 *     id: 1234,
 * });
 * const network2 = hcloud.getNetwork({
 *     name: "my-network",
 * });
 * const network3 = hcloud.getNetwork({
 *     withSelector: "key=value",
 * });
 * ```
 * <!--End PulumiCodeChooser -->
 */
export function getNetwork(args?: GetNetworkArgs, opts?: pulumi.InvokeOptions): Promise<GetNetworkResult> {
    args = args || {};
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("hcloud:index/getNetwork:getNetwork", {
        "id": args.id,
        "ipRange": args.ipRange,
        "labels": args.labels,
        "mostRecent": args.mostRecent,
        "name": args.name,
        "withSelector": args.withSelector,
    }, opts);
}

/**
 * A collection of arguments for invoking getNetwork.
 */
export interface GetNetworkArgs {
    /**
     * ID of the Network.
     */
    id?: number;
    /**
     * IPv4 prefix of the Network.
     */
    ipRange?: string;
    labels?: {[key: string]: string};
    /**
     * @deprecated This attribute has no purpose.
     */
    mostRecent?: boolean;
    /**
     * Name of the Network.
     */
    name?: string;
    /**
     * Label Selector. For more information about possible values, visit the [Hetzner Cloud Documentation](https://docs.hetzner.cloud/#overview-label-selector).
     */
    withSelector?: string;
}

/**
 * A collection of values returned by getNetwork.
 */
export interface GetNetworkResult {
    /**
     * (bool) Whether delete protection is enabled.
     */
    readonly deleteProtection: boolean;
    /**
     * (bool) Indicates if the routes from this network should be exposed to the vSwitch connection. The exposing only takes effect if a vSwitch connection is active.
     */
    readonly exposeRoutesToVswitch: boolean;
    /**
     * Unique ID of the Network.
     */
    readonly id: number;
    /**
     * IPv4 prefix of the Network.
     */
    readonly ipRange: string;
    readonly labels: {[key: string]: string};
    /**
     * @deprecated This attribute has no purpose.
     */
    readonly mostRecent?: boolean;
    /**
     * Name of the Network.
     */
    readonly name: string;
    readonly withSelector?: string;
}
/**
 * ## Example Usage
 *
 * <!--Start PulumiCodeChooser -->
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as hcloud from "@pulumi/hcloud";
 *
 * const network1 = hcloud.getNetwork({
 *     id: 1234,
 * });
 * const network2 = hcloud.getNetwork({
 *     name: "my-network",
 * });
 * const network3 = hcloud.getNetwork({
 *     withSelector: "key=value",
 * });
 * ```
 * <!--End PulumiCodeChooser -->
 */
export function getNetworkOutput(args?: GetNetworkOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetNetworkResult> {
    args = args || {};
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("hcloud:index/getNetwork:getNetwork", {
        "id": args.id,
        "ipRange": args.ipRange,
        "labels": args.labels,
        "mostRecent": args.mostRecent,
        "name": args.name,
        "withSelector": args.withSelector,
    }, opts);
}

/**
 * A collection of arguments for invoking getNetwork.
 */
export interface GetNetworkOutputArgs {
    /**
     * ID of the Network.
     */
    id?: pulumi.Input<number>;
    /**
     * IPv4 prefix of the Network.
     */
    ipRange?: pulumi.Input<string>;
    labels?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * @deprecated This attribute has no purpose.
     */
    mostRecent?: pulumi.Input<boolean>;
    /**
     * Name of the Network.
     */
    name?: pulumi.Input<string>;
    /**
     * Label Selector. For more information about possible values, visit the [Hetzner Cloud Documentation](https://docs.hetzner.cloud/#overview-label-selector).
     */
    withSelector?: pulumi.Input<string>;
}
