import * as pulumi from "@pulumi/pulumi";
import * as hetzner from "@pulumi/hetzner";

export const zone = hetzner.getDnsZone({ name: "bastiaandeknudt.be" });
