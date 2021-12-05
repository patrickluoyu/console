/*
 * This file is part of KubeSphere Console.
 * Copyright (C) 2019 The KubeSphere Console Authors.
 *
 * KubeSphere Console is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * KubeSphere Console is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with KubeSphere Console.  If not, see <https://www.gnu.org/licenses/>.
 */
module.exports = {
  'Account Role': '帳戶角色',
  'Platform Roles': '平台角色',
  'Account Roles': '帳戶角色',
  'Authorization Settings': '權限設置',
  'Authorized Actions': '可執行操作',
  Cluster: '集群',
  'Cluster Members Management': '成員管理',
  'Cluster Members View': '成員查看',
  'Cluster Monitoring View': '集群監控查看',
  CLUSTER_RESOURCES_MANAGEMENT: '集群資源管理',
  'Cluster Role': '集群角色',
  'Cluster Roles Management': '角色管理',
  'Cluster Roles View': '角色查看',
  'Clusters Management': '集群管理',
  'Components Management': '服務組件管理',
  'CRD Management': '自定義資源(CRD)管理',
  'Create Cluster Role': '創建集群角色',
  'Create Project Role': '創建項目角色',
  'Default user role which allows a user to manage resources within the projects created by the user himself or invited by others. It does not allow the user to manage unauthorized resources in the cluster.': '預設用戶角色，僅允許對自己創建或受邀加入的項目中的資源進行管理，無權操作集群範圍内其他資源。',
  'DevOps Members Management': '成員管理',
  'DevOps Members View': '成員查看',
  'DevOps Roles Management': '角色管理',
  'DevOps Roles View': '角色查看',
  'Edit Account Role': '編輯帳戶角色',
  'Edit Cluster Role': '編輯集群角色',
  'Edit Project Role': '編輯項目角色',
  'Edit Role': '編輯角色',
  'Federated Projects Management': '联邦项目管理',
  'Invalid role name': '角色名稱格式不合法',
  'Invited Successfully': '邀请成功',
  Member: '成員',
  'Network Policies Management': '網路策略管理',
  'Network Policies View': '網路策略查看',
  'Nodes View': '節點查看',
  ROLE_NAME_EMPTY_DESC: '請輸入角色名稱',
  'Please specify role authorization': '請選擇角色權限',
  'Project Details': '項目詳情',
  PROJECT_RESOURCES_MANAGEMENT: '項目資源管理',
  Role: '角色',
  'Role Management': '角色管理',
  'Role name exists': '角色名稱已存在',
  'Role Type': '角色類型',
  Roles: '角色',
  roles: '角色',
  'StorageClasses Management': '儲存類型管理',
  'StorageClasses View': '儲存類型查看',
  'Unable to delete preset role': '無法刪除預設角色',
  WORKSPACES_MANAGEMENT: '企業空間管理',
  WORKSPACES_VIEW: '企業空間查看',
  NO_AVAILABLE_ROLE: '目前項目無可用角色',
  JOIN_PROJECT_PLACEHOLDER: '輸入用戶名稱或者郵箱邀請用戶加入到項目中',
  ROLE_PROJECTS_JOIN_TIP: '輸入用戶名或者郵箱邀請用戶加入到項目中',
  ROLE_DELETE_TIP: '目前角色已有用戶綁定，請解綁後重試',
  ROLE_NO_AVAILABLE_TIP: '目前項目無可用角色',
  ROLE_TYPE_DESC: '角色類型根據權限範圍分為集群、項目兩類，目前角色的授權為該項目範圍。',
  RULE_WORKSPACES: 'Workspaces',
  RULE_KUBECTL: 'kubectl',
  RULE_MONITORING: 'Monitoring Management',
  RULE_PROJECTS: 'Project Management',
  RULE_USERS: 'User Management',
  RULE_ACCOUNTS: 'Account Management',
  RULE_ROLES: 'Role Management',
  RULE_REGISTRYS: 'Image Registry',
  RULE_PERSISTENTVOLUMECLAIMS: 'Volume Management',
  RULE_STORAGECLASSES: 'Storage Class Management',
  RULE_IMAGES: 'Image Repository Management',
  RULE_NODES: 'Node Management',
  RULE_APP_CATALOG: 'Repository Management',
  RULE_REPOS: 'Repository Management',
  RULE_APPS: 'App Template',
  RULE_DEPLOYMENTS: 'Deployments',
  RULE_STATEFULSETS: 'Statefulsets',
  RULE_DAEMONSETS: 'Daemonsets',
  RULE_SERVICES: 'Service Management',
  RULE_ROUTES: 'Route Management',
  RULE_VIEW: 'View',
  RULE_CREATE: 'Create',
  RULE_EDIT: 'Edit',
  RULE_DELETE: 'Delete',
  RULE_ROLE_BINDING: 'Binding Roles',
  RULE_PODSCALE: 'Pod Scaling Management',
  RULE_SCALE: 'Scale out/in',
  RULE_MEMBERS: 'Member Management',
  RULE_MEMBER_ROLES: 'Member Role',
  RULE_COMPONENTS: 'Components',
  RULE_VOLUMES: 'Volumes',
  RULE_PODS: 'Pod Management',
  RULE_TERMINAL: 'Remote Terminal',
  RULE_APPLICATIONS: 'Applications',
  RULE_JOBS: 'Jobs',
  RULE_CRONJOBS: 'Cronjobs',
  RULE_SECRETS: 'Secrets',
  RULE_CONFIGMAPS: 'Configmaps',
  RULE_DRAIN: 'Drain',
  RULE_CORDON: 'Cordon/Uncordon',
  RULE_TAINT: 'Taint Management',
  RULE_DEVOPS: 'DevOps Project Management',
  RULE_REGISTRIES: 'Image Registry',
  RULE_ORGANIZATIONS: 'Organization',
  RULE_INTERNET: 'Internet Access Management',
  RULE_LOGGING: 'Log Management',
  RULE_ALERTING: 'Alerting Management',
  RULE_MANAGE: 'Manage',
  RULE_ADVANCED: 'Advanced Settings',
  RULE_S2IBUILDERS: 'Image Builder',
  NODES_VIEW_DESC: '查看節點資訊',
  NODES_MANAGEMENT_DESC: '管理節點，停用/啟用、汙點管理等',
  CRD_MANAGEMENT_DESC: '管理集群的自定義資源，可 查看/修改/刪除 集群 CRD 資源',
  COMPONENTS_MANAGEMENT_DESC: '管理集群的服務組件',
  ACCOUNT_ROLE_DESC: '帳號角色可以定義平台内的帳號擁有的權限',
  ACCOUNT_ROLE_CREATE_DESC: '帳號角色可以定義平台内的帳號擁有的權限',
  DEVOPS_ROLES_VIEW_DESC: '查看 DevOps 项目角色',
  DEVOPS_ROLES_MANAGEMENT_DESC: '可以 創建/編輯/刪除  DevOps 项目角色，系統預設角色無法刪除',
  DEVOPS_MEMBERS_VIEW_DESC: '查看 DevOps 项目成員',
  DEVOPS_MEMBERS_MANAGEMENT_DESC: '邀請/編輯/移除 DevOps 项目成員',
  CLUSTER_MEMBERS_MANAGEMENT_DESC: '邀請/編輯/移除集群成員',
  CLUSTER_MEMBERS_VIEW_DESC: '查看集群成員',
  CLUSTER_ROLES_MANAGEMENT_DESC: '可以 創建/編輯/刪除 集群角色，系統預設角色無法刪除',
  CLUSTER_ROLES_VIEW_DESC: '查看集群角色',
  NETWORK_POLICIES_MANAGEMENT_DESC: '創建/編輯/刪除 集群網路策略',
  NETWORK_POLICIES_VIEW_DESC: ' 查看集群網路策略',
  STORAGECLASSES_VIEW_DESC: '查看集群所有儲存類型',
  STORAGECLASSES_MANAGEMENT_DESC: '創建/編輯/刪除 儲存類型，設置預設儲存類型',
  CLUSTER_MONITORING_VIEW_DESC: '查看集群物理資源，應用資源的監控數據',
  FEDERATED_PROJECTS_MANAGEMENT_DESC: '管理企業空間裡的所有多集群項目，可以 創建/編輯/刪除 多集群項目',
  ROLE_CLUSTER_ADMIN: '集群管理員，可以管理集群中所有的資源。',
  ROLE_CLUSTER_VIEWER: '集群觀察者，可以查看集群下所有的資源。',
  ROLE_DEVOPS_REGULAR: 'Manage pipelines and credentials and view members and roles in the DevOps project.'
};