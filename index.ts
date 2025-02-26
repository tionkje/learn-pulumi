import * as pulumi from "@pulumi/pulumi";
import * as hetzner from "@pulumi/hetzner";
import * as hcloud from "@pulumi/hcloud";

export const zone = hetzner.getDnsZone({ name: "bastiaandeknudt.be" });

export const keys = hcloud.getSshKeys();

async function makeRecord(name: string, type: string, value: string|pulumi.Output<string>) {
  const zone = await hetzner.getDnsZone({ name: "bastiaandeknudt.be" });
  if (!zone.id) throw new Error('Zone not found');
  const { records } = await hetzner.getDnsRecords({ zoneId: zone.id });
  const rec = records.find(r => r.name === name && r.type == type);
  return new hetzner.DnsRecord(`${name}_${type}`, {
    name,
    ttl: 7200,
    type,
    value,
    zoneId: zone.id,
  }, { import: rec?.id });
}

makeRecord('test', 'A', '127.0.0.4');
