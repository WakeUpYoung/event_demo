<script>
  let eventConfigs = [
    {id: 1, description: 'Config_1 For VIP', updatedBy: 'System', updatedDate: '17/06/2020 10:00:35', valid: true},
    {id: 2, description: 'Config_2 For CCC', updatedBy: 'System', updatedDate: '17/06/2020 10:01:35', valid: true},
    {id: 3, description: 'Config_3', updatedBy: 'System', updatedDate: '17/06/2020 10:02:31', valid: true},
  ];

  const userActions = {
    create: 1,
    update: 2,
    view: 3,
  };

  let users = [
    {
      id: 'tcsa01', configs: [1, 2, 3]
    },
    {
      id: 'tcsa02', configs: [1, 2]
    },
    {
      id: 'tcsa03', configs: [1, 3]
    },
    {
      id: 'tcsa04', configs: [1]
    },
    {
      id: 'kyj_uat', configs: [1, 2, 3]
    },
  ];

  export default {
    name: "constant",
    eventConfigs,
    userActions,
    users
  }
</script>

<style scoped>

</style>
