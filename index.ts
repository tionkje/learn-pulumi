import * as pulumi from "@pulumi/pulumi";
import * as hetzner from "@pulumi/hetzner";
import * as hcloud from "@pulumi/hcloud";

export const zone = hetzner.getDnsZone({ name: "bastiaandeknudt.be" });

export const keys = hcloud.getSshKeys();
