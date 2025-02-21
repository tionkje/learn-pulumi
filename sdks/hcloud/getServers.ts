// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

/**
 * ## Example Usage
 *
 * <!--Start PulumiCodeChooser -->
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as hcloud from "@pulumi/hcloud";
 *
 * const s3 = hcloud.getServers({
 *     withSelector: "key=value",
 * });
 * ```
 * <!--End PulumiCodeChooser -->
 */
export function getServers(args?: GetServersArgs, opts?: pulumi.InvokeOptions): Promise<GetServersResult> {
    args = args || {};
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("hcloud:index/getServers:getServers", {
        "withSelector": args.withSelector,
        "withStatuses": args.withStatuses,
    }, opts);
}

/**
 * A collection of arguments for invoking getServers.
 */
export interface GetServersArgs {
    /**
     * Label Selector. For more information about possible values, visit the [Hetzner Cloud Documentation](https://docs.hetzner.cloud/#overview-label-selector).
     */
    withSelector?: string;
    /**
     * List only servers with the specified status, could contain `initializing`, `starting`, `running`, `stopping`, `off`, `deleting`, `rebuilding`, `migrating`, `unknown`.
     */
    withStatuses?: string[];
}

/**
 * A collection of values returned by getServers.
 */
export interface GetServersResult {
    /**
     * The provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
    /**
     * (list) List of all matching servers. See `data.hcloud_server` for schema.
     */
    readonly servers: outputs.GetServersServer[];
    readonly withSelector?: string;
    readonly withStatuses?: string[];
}
/**
 * ## Example Usage
 *
 * <!--Start PulumiCodeChooser -->
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as hcloud from "@pulumi/hcloud";
 *
 * const s3 = hcloud.getServers({
 *     withSelector: "key=value",
 * });
 * ```
 * <!--End PulumiCodeChooser -->
 */
export function getServersOutput(args?: GetServersOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetServersResult> {
    args = args || {};
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("hcloud:index/getServers:getServers", {
        "withSelector": args.withSelector,
        "withStatuses": args.withStatuses,
    }, opts);
}

/**
 * A collection of arguments for invoking getServers.
 */
export interface GetServersOutputArgs {
    /**
     * Label Selector. For more information about possible values, visit the [Hetzner Cloud Documentation](https://docs.hetzner.cloud/#overview-label-selector).
     */
    withSelector?: pulumi.Input<string>;
    /**
     * List only servers with the specified status, could contain `initializing`, `starting`, `running`, `stopping`, `off`, `deleting`, `rebuilding`, `migrating`, `unknown`.
     */
    withStatuses?: pulumi.Input<pulumi.Input<string>[]>;
}
