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
 * const image1 = hcloud.getImage({
 *     id: 1234,
 * });
 * const image2 = hcloud.getImage({
 *     name: "ubuntu-18.04",
 *     withArchitecture: "x86",
 * });
 * const image3 = hcloud.getImage({
 *     withSelector: "key=value",
 * });
 * const main = new hcloud.Server("main", {image: image1.then(image1 => image1.id)});
 * ```
 * <!--End PulumiCodeChooser -->
 */
export function getImage(args?: GetImageArgs, opts?: pulumi.InvokeOptions): Promise<GetImageResult> {
    args = args || {};
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("hcloud:index/getImage:getImage", {
        "id": args.id,
        "includeDeprecated": args.includeDeprecated,
        "mostRecent": args.mostRecent,
        "name": args.name,
        "selector": args.selector,
        "withArchitecture": args.withArchitecture,
        "withSelector": args.withSelector,
        "withStatuses": args.withStatuses,
    }, opts);
}

/**
 * A collection of arguments for invoking getImage.
 */
export interface GetImageArgs {
    /**
     * ID of the Image.
     */
    id?: number;
    /**
     * Also return the image if it is marked as deprecated.
     */
    includeDeprecated?: boolean;
    /**
     * If more than one result is returned, use the most recent Image.
     */
    mostRecent?: boolean;
    /**
     * Name of the Image.
     */
    name?: string;
    /**
     * @deprecated Please use the with_selector property instead.
     */
    selector?: string;
    /**
     * Select only images with this architecture, could be `x86` (default) or `arm`.
     */
    withArchitecture?: string;
    /**
     * [Label selector](https://docs.hetzner.cloud/#overview-label-selector)
     */
    withSelector?: string;
    /**
     * Select only images with the specified status, could contain `creating` or `available`.
     */
    withStatuses?: string[];
}

/**
 * A collection of values returned by getImage.
 */
export interface GetImageResult {
    /**
     * (string) Architecture of the Image.
     */
    readonly architecture: string;
    /**
     * (string) Date when the Image was created (in ISO-8601 format).
     */
    readonly created: string;
    /**
     * (string) Point in time when the image is considered to be deprecated (in ISO-8601 format).
     */
    readonly deprecated: string;
    /**
     * (string) Description of the Image.
     */
    readonly description: string;
    /**
     * (int) Unique ID of the Image.
     */
    readonly id: number;
    readonly includeDeprecated?: boolean;
    readonly labels: {[key: string]: string};
    readonly mostRecent?: boolean;
    /**
     * (string) Name of the Image, only present when the Image is of type `system`.
     */
    readonly name: string;
    /**
     * (string) Flavor of operating system contained in the image, could be `ubuntu`, `centos`, `debian`, `fedora` or `unknown`.
     */
    readonly osFlavor: string;
    /**
     * (string) Operating system version.
     */
    readonly osVersion: string;
    /**
     * (bool) Indicates that rapid deploy of the image is available.
     */
    readonly rapidDeploy: boolean;
    /**
     * @deprecated Please use the with_selector property instead.
     */
    readonly selector?: string;
    /**
     * (string) Type of the Image, could be `system`, `backup` or `snapshot`.
     */
    readonly type: string;
    readonly withArchitecture?: string;
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
 * const image1 = hcloud.getImage({
 *     id: 1234,
 * });
 * const image2 = hcloud.getImage({
 *     name: "ubuntu-18.04",
 *     withArchitecture: "x86",
 * });
 * const image3 = hcloud.getImage({
 *     withSelector: "key=value",
 * });
 * const main = new hcloud.Server("main", {image: image1.then(image1 => image1.id)});
 * ```
 * <!--End PulumiCodeChooser -->
 */
export function getImageOutput(args?: GetImageOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetImageResult> {
    args = args || {};
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("hcloud:index/getImage:getImage", {
        "id": args.id,
        "includeDeprecated": args.includeDeprecated,
        "mostRecent": args.mostRecent,
        "name": args.name,
        "selector": args.selector,
        "withArchitecture": args.withArchitecture,
        "withSelector": args.withSelector,
        "withStatuses": args.withStatuses,
    }, opts);
}

/**
 * A collection of arguments for invoking getImage.
 */
export interface GetImageOutputArgs {
    /**
     * ID of the Image.
     */
    id?: pulumi.Input<number>;
    /**
     * Also return the image if it is marked as deprecated.
     */
    includeDeprecated?: pulumi.Input<boolean>;
    /**
     * If more than one result is returned, use the most recent Image.
     */
    mostRecent?: pulumi.Input<boolean>;
    /**
     * Name of the Image.
     */
    name?: pulumi.Input<string>;
    /**
     * @deprecated Please use the with_selector property instead.
     */
    selector?: pulumi.Input<string>;
    /**
     * Select only images with this architecture, could be `x86` (default) or `arm`.
     */
    withArchitecture?: pulumi.Input<string>;
    /**
     * [Label selector](https://docs.hetzner.cloud/#overview-label-selector)
     */
    withSelector?: pulumi.Input<string>;
    /**
     * Select only images with the specified status, could contain `creating` or `available`.
     */
    withStatuses?: pulumi.Input<pulumi.Input<string>[]>;
}
