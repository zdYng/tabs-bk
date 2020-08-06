// 登录
export const loginAPI = '/login-authority-system/passport/api/login/'
// 菜单维护API
export const menuAPI = '/basic/menu/selmenudetail/'
// 首页侧边栏
export const homeAPI = '/basic/menu/selmenutree/'
// 菜单下拉接口
export const dropAPI = '/basic/menu/selmenudrop/'
// 数据字典菜单接口
export const dictionaryAPI = '/basic/datadictionary/seldictree/'
// 数据字典项接口
export const termDicAPI = `/basic/datadictionary/seldatadic/`
// 项目管理获取项目下拉列表
export const projectSelectAPI = '/ssm/ssm/project/'
// 项目管理页面。点击修改，对项目信息进行维护
export const editProject = 'ssm/ssm/project/editProject'
// 项目信息维护页面的项目类型、项目阶段下拉框的接口
export const selProjectAPI = 'basic/datadictionary/selproject'
// 管理项目页面的表格数据接口
export const queryListAPI = '/ssm/ssm/project/queryList/'
// 项目信息维护页面提交数据接口
export const addProjectAPI = '/ssm/ssm/project/addProject/'
// 项目信息维护页面查看项目接口
export const getProjectByIdAPI = 'ssm/ssm/project/getProjectById'
// 项目进度维护页面提交数据接口
export const updateStageAPI = '/ssm/ssm/project/updateStage/'
// 任务分解页面列表数据接口
export const queryTaskTreeAPI = '/ssm/ssm/task/tree/'
// 任务分解页面点击列表的每一项，根据用户点击获取当前行的数据
export const quertTaskInfoAPI = '/ssm/ssm/task/queryTaskInfo/'
// 任务分解页面，任务信息看板的数据
export const getTaskByIdAPI = '/ssm/ssm/task/getTaskById'
// 模块查询接口
export const moduleQueryAPI = '/basic/module/seltree'
// 任务分解页面的任务信息面板，获取任务下拉列表接口
export const taskSelectAPI = '/ssm/ssm/task'
// 任务分解页面的任务看板，获取列表信息接口
export const queryTaskAPI = 'ssm/ssm/task/queryTask'
// 任务分解页面，点击新增分组接口
export const addTaskAPI = 'ssm/ssm/task/addTask'
// 任务分解页面，删除项目接口
export const deleteByIdAPI = 'ssm/ssm/project/deleteById'
// 任务分解页面，删除任务接口
export const taskDeleteAPI = 'ssm/ssm/task/deleteTaskById'
// 任务分解页面快捷维护接口
export const taskMarkAPI = 'ssm/ssm/task/mark'
// 任务分解页面下的保存模版接口
export const exportTemplateAPI = '/ssm/ssm/task/exportTemplate'
// 任务分解页面下的保存模版弹窗下拉框
export const selectdropAPI = 'basic/datadictionary/selectdrop'
// 任务管理下面的日志管理页面, 列表和日志查询
export const queryLogAPI = 'ssm/ssm/task/queryLog'
// 日志管理页面，新增备注接口
export const addNotesAPI = 'ssm/ssm/task/addNotes'
// 获取标准工时树形菜单接口
export const listTree = 'ssm/ssm/task/listTree'
// 标准工时页面，增加分组，增加任务，增加子任务接口
export const addTimeSheet = 'ssm/ssm/task/addTimeSheet'
// 标准工时页面，查看标准工时
export const getSheetByIdAPI = 'ssm/ssm/task/getSheetById'
// 标准工时页面，修改标准工时
export const editTimeSheetAPI = 'ssm/ssm/task/editTimeSheet'
// 任务分解分解页面，任务看板，点击回复接口
export const replyAPI = 'ssm/ssm/task/reply'
// 任务分解页面，修改任务接口
export const updateTaskById = 'ssm/ssm/task/updateTaskById'