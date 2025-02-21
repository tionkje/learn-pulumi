// import * as github from "@pulumi/github";
import * as hetzner from "@pulumi/hetzner";
import * as hcloud from "@pulumi/hcloud";

// const repo = new github.Repository("demo-repo", {
//     description: "Demo Repository for GitHub",
// });
//
// export const repositoryName = repo.name



export const zone = hetzner.getDnsZone({ name: "bastiaandeknudt.be" });

export const keys = hcloud.getSshKeys();
