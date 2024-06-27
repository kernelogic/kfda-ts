// @ts-ignore
const path = require('path');
// @ts-ignore
const fs = require('fs');

// @ts-ignore
const triggers = [
  'src/features/auditLog/auditLogTriggers.sql',
  'src/features/dataSource/dataSourceTriggers.sql',
  'src/features/dataSet/dataSetTriggers.sql',
  'src/features/dataCap/dataCapTriggers.sql',
  'src/features/apiKey/apiKeyTriggers.sql',
  'src/features/membership/membershipTriggers.sql',
  'src/features/subscription/subscriptionTriggers.sql',
  'src/features/tenant/tenantTriggers.sql',
  'src/features/user/userTriggers.sql',
]
  .map((triggerSqlPath) => {
    return fs
      .readFileSync(path.join(process.cwd(), ...triggerSqlPath.split('/')))
      .toString();
  })
  .join('\n\n');

exports.triggers = triggers;
