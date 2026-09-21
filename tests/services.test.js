import { test } from 'node:test';
import assert from 'node:assert/strict';
import { services } from '../src/data/services.js';

test('every service supplies the content required by service pages', () => {
  assert.ok(services.length > 0);
  assert.equal(new Set(services.map(service => service.slug)).size, services.length);
  for (const service of services) {
    assert.equal(typeof service.description, 'string', `${service.slug}: description`);
    assert.ok(service.description.length > 0, `${service.slug}: empty description`);
    assert.ok(Array.isArray(service.tips) && service.tips.every(tip => typeof tip === 'string'), `${service.slug}: tips`);
    assert.ok(Array.isArray(service.faqs) && service.faqs.every(faq => typeof faq.q === 'string' && typeof faq.a === 'string'), `${service.slug}: FAQs`);
  }
});
