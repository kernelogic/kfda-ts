import { apiKeyLabel } from 'src/features/apiKey/apiKeyLabel';
import { dataSourceLabel } from 'src/features/dataSource/dataSourceLabel';
import { dataSetLabel } from 'src/features/dataSet/dataSetLabel';
import { dataCapLabel } from 'src/features/dataCap/dataCapLabel';
import { fileLabel } from 'src/features/file/fileLabel';
import { membershipLabel } from 'src/features/membership/membershipLabel';
import { subscriptionLabel } from 'src/features/subscription/subscriptionLabel';
import { tenantLabel } from 'src/features/tenant/tenantLabel';
import { userLabel } from 'src/features/user/userLabel';

export const labels = {
  User: userLabel,
  Membership: membershipLabel,
  Tenant: tenantLabel,
  Subscription: subscriptionLabel,
  File: fileLabel,
  ApiKey: apiKeyLabel,
  DataSource: dataSourceLabel,
  DataSet: dataSetLabel,
  DataCap: dataCapLabel,
};
