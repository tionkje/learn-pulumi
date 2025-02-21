// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

/**
 * Provides a Hetzner Cloud Placement Group to represent a Placement Group in the Hetzner Cloud.
 *
 * ## Example Usage
 *
 * <!--Start PulumiCodeChooser -->
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as hcloud from "@pulumi/hcloud";
 *
 * const my_placement_group = new hcloud.PlacementGroup("my-placement-group", {
 *     name: "my-placement-group",
 *     type: "spread",
 *     labels: {
 *         key: "value",
 *     },
 * });
 * const node1 = new hcloud.Server("node1", {
 *     name: "node1",
 *     image: "debian-11",
 *     serverType: "cx22",
 *     placementGroupId: my_placement_group.id,
 * });
 * ```
 * <!--End PulumiCodeChooser -->
 *
 * ## Import
 *
 * Placement Groups can be imported using its `id`:
 *
 * ```sh
 * $ pulumi import hcloud:index/placementGroup:PlacementGroup example "$PLACEMENT_GROUP_ID"
 * ```
 */
export class PlacementGroup extends pulumi.CustomResource {
    /**
     * Get an existing PlacementGroup resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: PlacementGroupState, opts?: pulumi.CustomResourceOptions): PlacementGroup {
        return new PlacementGroup(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'hcloud:index/placementGroup:PlacementGroup';

    /**
     * Returns true if the given object is an instance of PlacementGroup.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is PlacementGroup {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === PlacementGroup.__pulumiType;
    }

    /**
     * User-defined labels (key-value pairs) should be created with.
     */
    public readonly labels!: pulumi.Output<{[key: string]: string} | undefined>;
    /**
     * Name of the Placement Group.
     */
    public readonly name!: pulumi.Output<string>;
    public /*out*/ readonly servers!: pulumi.Output<number[]>;
    /**
     * Type of the Placement Group.
     */
    public readonly type!: pulumi.Output<string>;

    /**
     * Create a PlacementGroup resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: PlacementGroupArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: PlacementGroupArgs | PlacementGroupState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as PlacementGroupState | undefined;
            resourceInputs["labels"] = state ? state.labels : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["servers"] = state ? state.servers : undefined;
            resourceInputs["type"] = state ? state.type : undefined;
        } else {
            const args = argsOrState as PlacementGroupArgs | undefined;
            if ((!args || args.type === undefined) && !opts.urn) {
                throw new Error("Missing required property 'type'");
            }
            resourceInputs["labels"] = args ? args.labels : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["type"] = args ? args.type : undefined;
            resourceInputs["servers"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(PlacementGroup.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * Input properties used for looking up and filtering PlacementGroup resources.
 */
export interface PlacementGroupState {
    /**
     * User-defined labels (key-value pairs) should be created with.
     */
    labels?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * Name of the Placement Group.
     */
    name?: pulumi.Input<string>;
    servers?: pulumi.Input<pulumi.Input<number>[]>;
    /**
     * Type of the Placement Group.
     */
    type?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a PlacementGroup resource.
 */
export interface PlacementGroupArgs {
    /**
     * User-defined labels (key-value pairs) should be created with.
     */
    labels?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * Name of the Placement Group.
     */
    name?: pulumi.Input<string>;
    /**
     * Type of the Placement Group.
     */
    type: pulumi.Input<string>;
}
