// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

/**
 * Provides a list of available Hetzner Cloud Server Types.
 *
 * ## Example Usage
 *
 * <!--Start PulumiCodeChooser -->
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as hcloud from "@pulumi/hcloud";
 *
 * const all = hcloud.getServerTypes({});
 * ```
 * <!--End PulumiCodeChooser -->
 */
export function getServerTypes(opts?: pulumi.InvokeOptions): Promise<GetServerTypesResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("hcloud:index/getServerTypes:getServerTypes", {
    }, opts);
}

/**
 * A collection of values returned by getServerTypes.
 */
export interface GetServerTypesResult {
    /**
     * @deprecated Use server_types list instead
     */
    readonly descriptions: string[];
    /**
     * The ID of this resource.
     */
    readonly id: string;
    /**
     * @deprecated Use server_types list instead
     */
    readonly names: string[];
    /**
     * @deprecated Use server_types list instead
     */
    readonly serverTypeIds: string[];
    readonly serverTypes: outputs.GetServerTypesServerType[];
}
/**
 * Provides a list of available Hetzner Cloud Server Types.
 *
 * ## Example Usage
 *
 * <!--Start PulumiCodeChooser -->
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as hcloud from "@pulumi/hcloud";
 *
 * const all = hcloud.getServerTypes({});
 * ```
 * <!--End PulumiCodeChooser -->
 */
export function getServerTypesOutput(opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetServerTypesResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("hcloud:index/getServerTypes:getServerTypes", {
    }, opts);
}
