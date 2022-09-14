var _activiti, _paramsa;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/*
 * @Description: 中文对照表
 */
export default {
  tipWords: {
    SelectiveFlowCode: '请选择流水码',
    FailedToGenerateCode: '生成编码失败',
    msg: '格式不正确'
  },
  common: {
    index: '序号',
    definition: '定义',
    SyncModal: '同步建模时间较长，是否继续 ？',
    delTip: '菜单组下还有数据，是否确定删除',
    QMS: '全生命周期质量执行系统',
    please_enter: '请输入',
    prompt: '提示',
    ok: '确定',
    transfer: '转移',
    cancel: '取消',
    recover: '恢复',
    save: '保存',
    not_save: '不保存',
    giveup: '放弃',
    confirm: '确认',
    delete: '删除',
    continue: '继续',
    confirm_deletion: '确定删除吗',
    confirm_execution: '确认执行此操作',
    edit: '编辑',
    search: '搜索',
    advanced_search: '高级搜索',
    reset: '清空',
    is_required: '是必填字段',
    incorrect_format: '格式不正确',
    select: '选择',
    close: '关闭',
    send_messages: '发送消息',
    send_email: '发送邮件',
    prompt_message: '请先选择消息',
    prompt_user: '请先选择用户',
    refresh: '刷新',
    move_node: '模块转移',
    move_node_data: '迁移节点数据',
    please_select_node: '请选择节点',
    cannot_select_root_node: '不能选择根节点',
    classification_object: '分类对象',
    tab_context_menu: {
      close_current_tags: '关闭当前标签',
      close_other_tags: '关闭其它标签',
      close_all_tags: '关闭所有标签'
    },
    save_error: '保存失败',
    value_cannot_repeat: '该值不能重复',
    max_len: '最大长度',
    add_from_store: '从菜单库添加',
    please_select_file: '请选择文件',
    select_file_prompt1: '单击或拖动文件到该区域以上传',
    select_file_prompt2: '支持单次或批量上传',
    roleGroups_cannot_assigned_permissions: '角色组不能分配权限',
    switch_view: '切换视图',
    jsScriptError: 'JS脚本异常',
    expandAllNodes: '展开全部节点',
    collapseAllNodes: '收起全部节点',
    wait_file_uploaded: '等待文件上传完成',
    makeSure: '确定'
  },
  login: {
    title: '登录',
    userName: '用户名',
    password: '密码',
    inputJobNumber: '请输入您的工号',
    inputPassword: '请输入您的密码'
  },
  header: {
    user: {
      start_modeling: '开启建模',
      end_modeling: '关闭建模',
      synchro_model: '同步建模',
      user_center: '个人中心',
      yh_info: '用户信息',
      change_password: '修改密码',
      about_us: '关于我们',
      logout: '退出',
      logout_msg: '正在建模中，是否保存建模？',
      change_language: '切换语言',
      change_password_info1: '两次输入密码不一致',
      change_password_info2: '新密码和旧密码相同',
      onlineUser: '在线人员明细',
      migrate_model_data: '迁移建模数据',
      schedule: '进度',
      userTip: {
        avatar200KB: '头像大小限制200KB'
      },
      notice: {
        send_mail: '发送邮件',
        reply_mail: '邮件回复',
        reply_message: '消息回复',
        send_message: '发送消息',
        mark_read: '标记已读',
        cancel: '取消',
        notification: '消息通知',
        task_agent: '任务待办',
        workflow_to_do: '工作流待办',
        send_messages: '发送消息',
        send_email: '发送邮件',
        receiver: '接收人',
        send: '发送',
        title: '标题',
        content: '内容',
        sender: '发送人',
        readState: '已读',
        senderTime: '发送时间',
        prompt_message: '请先选择消息',
        message_sent_successfully: '消息发送成功',
        mail_sent_successfully: '邮件发送成功',
        notice_empty_text: '你已查看所有通知',
        todo_empty_text: '你已完成所有待办',
        act_todo_empty_text: '你已完成所有待办',
        plain_text: '纯文本',
        rich_text: '富文本'
      },
      fields: {
        man: '男',
        women: '女',
        avatar: '头像',
        employee_info: '员工信息',
        employeeNo: '工号',
        employeeName: '员工姓名',
        tel: '联系电话',
        mail: '邮箱',
        sax: '性别',
        age: '年龄',
        INTIME: '入职时间',
        idCard: '身份证号码',
        wkSate: '工作状态',
        employeeRemark: '用户备注',
        userName: '用户登录名',
        userRemark: '用户备注',
        depart: '部门',
        departMentNo: '部门代号',
        departMentName: '部门名称',
        password: '原始密码',
        newPassword: '新密码',
        newPassword2: '确认密码',
        ip: '登录IP',
        loginTime: '登录时间',
        osBowser: '终端类型',
        loginWay: '登录方式',
        singleSignOnSSO: 'single sign on(SSO)',
        systemLogin: '系统登录'
      }
    },
    message: {
      change_password_message: '请及时修改密码',
      password_cannot_number: '密码不能是纯数字',
      length_out_of_range: '新密码长度超出范围',
      contains_numbers_english: '必须包含数字和英文',
      contains_special_characters: '必须包含特殊字符',
      sync_not_completed: '同步未完成，请勿关闭'
    },
    rule: {},
    iconTip: {
      online: '在线人数',
      notice: '消息通知',
      todo: '待办任务'
    }
  },
  commonNavigation: {
    title: '常用导航'
  },
  configPlatform: {
    title: '建模平台',
    index: '序号',
    buttons: {
      select_show_obj: '选择显示对象',
      show_business_obj: '显示业务对象',
      show_system_obj: '显示系统对象',
      show_design_obj: '显示设计中对象',
      show_obsolete_obj: '显示已作废对象',
      show_synced_obj: '显示已同步对象',
      select_create_obj: '新建',
      create_common_obj: '普通对象',
      create_file_obj: '文件对象',
      create_relation_obj: '关联对象',
      create_class_obj: '分类对象',
      update: '修改',
      delete: '删除',
      abolish: '作废',
      create: '新建',
      preview: '预览',
      cancel_upgrade: '取消变更',
      synchro_model: '同步建模',
      upgrade: '变更',
      add: '添加',
      copy_obj: '复制对象',
      copy_view: '复制视图',
      refresh_meta: '刷新建模',
      reorder: '排序',
      changeFile: '转换为文件对象',
      move_node: '模块转移',
      copy: '复制',
      paste: '粘贴',
      creatingRootNode: '新建根节点'
    },
    tableConfig: {
      title: '业务对象',
      fields: {
        STATE: '状态',
        EFFECTIVE: '是否生效',
        VER: '版本',
        OBJECTNO: '对象标识',
        VIEWNO: '视图标识',
        VIEWNAME: '视图名称',
        TABLENAME: '数据库表名',
        NAME: '中文标题',
        ENNAME: '英文标题',
        IDLIFE: '生命周期',
        TYPE: '对象类型',
        QUERYFIELDS: '快速查询字段',
        BRIEFEXP: '简单表达式',
        IMPLCLASS: '实现类',
        REMARK: '备注',
        OPERATION: '操作',
        CONTROLAUTH: '控制权限',
        CONTRLFILE: '控制归档权',
        multiLanguage: '多语言'
      },
      fieldsProperty: {
        title: '字段集',
        buttons: {
          select_show_field: '选择显示字段',
          show_business_field: '显示业务字段',
          show_system_field: '显示系统字段',
          add_common_field: '添加常用字段'
        },
        fields: {
          businessField: '业务字段',
          systemField: '系统字段',
          NO: '字段标识',
          FIELDNAME: '数据库字段名',
          TTABLENAME: '目标数据库字段名',
          NAME: '中文标题',
          ENNAME: '英文标题',
          FTYPE: '字段类型',
          FLENGTH: '字段长度',
          ACCURACY: '精度',
          ONLY: '验证唯一性',
          ALLOWNULL: '允许为空',
          DEFAULTV: '缺省值',
          EDITOR: '编辑器',
          EDITPARAMS: '编辑器定义',
          TYPE: '字段类别',
          REMARK: '备注',
          SUPQUERY: '支持高级搜索',
          SUPLINK: '支持超链接',
          SUPCOPY: '支持复制',
          condition: '查询条件',
          objectNo: '引用对象标识',
          viewNo: '查询视图标识',
          LINKPARAMS: '超链接参数',
          rowHeight: '行高',
          format: '时间格式',
          canInput: '可输入',
          canMultiSelect: '可多选',
          canMultipleChoice: '多字段',
          multiple: '支持多选',
          sql: '查询语句',
          selectMap: '是否映射部门',
          tfield: '目标字段',
          sfield: '源字段',
          searchFields: '搜索字段',
          nfield: '列名',
          name: '显示值',
          key: '映射值',
          color: '颜色',
          field: '字段',
          sort: '排序',
          visibilityToggle: '是否显示切换按钮',
          TOBJECTNO: '目标对象标识',
          RELEVANCE: '支持关联关系',
          RELEVANCENO: '关联关系标识',
          parameter: '配置参数',
          imgMultiple: '支持多选图片',
          imgMaxSize: '单张图片大小 (MB)',
          imgFormat: '支持图片格式',
          imgMaximum: '图片最大上传数量',
          icon: '图标',
          operation: '操作',
          edit: '修改',
          save: '保存',
          cancel: '取消',
          ok: '确定',
          reset: '重置',
          left: '居左',
          right: '居右',
          center: '居中'
        },
        fields1: {
          addJsonFields: '添加JSON字段',
          JsonFields: 'JSON字段',
          systemFields: '系统字段',
          businessFields: '业务字段',
          linkType: '链接类型',
          dataDrill: '数据钻取',
          aLabel: 'a标签超链接',
          internalFile: '内部文件',
          externalFile: '外部文件',
          link: '链接',
          relatedPage: '关联页',
          openField: '开启状态显示值',
          closeField: '关闭状态显示值'
        }
      },
      objectMenu: {
        title: '行事件',
        buttons: {
          select_create_menu: '选择新建事件',
          create_menu_group: '新建事件组',
          create_menu_object: '新建事件项',
          create_pre_processing: '新建前处理',
          create_post_processing: '新建后处理',
          other_button: '其他按钮'
        },
        fields: {
          NAME: '中文标题',
          ENNAME: '英文标题',
          NO: '标识(英文标题)',
          MTYPE: '事件类型',
          TYPE: '类型',
          PARAM: '其他按钮',
          WTYPE: '弹窗类型',
          ICON: '图标',
          OBJECTNO: '对象标识',
          SobjectNO: '源对象标识',
          TABLENAME: '数据库表名',
          STABLENAME: '源数据库表名',
          BATCH: '批量上传',
          MNO: '弹窗标识',
          IMPLTYPE: '实现方式',
          IMPLCLASS: '实现类',
          PROPERTYPARAM: '属性页参数',
          REQPARAM: '请求参数',
          isBddp: '大屏报表',
          reportId: '报表ID',
          reportName: '报表名称',
          isDynamic: '动态参数',
          name: '参数名',
          key: '值',
          modal_params: '弹窗参数',
          impl_params: '实现参数',
          procedures: '存储过程名称',
          COMMENT: '描述',
          main_object_params: '主对象参数',
          parent_object_params: '父对象参数',
          relationship_object_params: '关系对象参数',
          class_page_params: '分类页面参数',
          tree_table_object_param: '树表对象参数',
          other_params: '其他参数',
          add_default_value: '添加缺省值',
          add_mapping_field: '添加映射字段（父对象）',
          sfield: '源字段',
          tfield: '目标字段',
          field: '字段',
          customParam: '自定义参数',
          disabledAction: '控制显示',
          CONTROLAUTH: '控制权限',
          AUTHCODE: '授权码',
          RESTFUL: '路径',
          IS_DYNAMIC: '是否动态'
        }
      },
      objectProperty: {
        title: 'Form 表单',
        objectTitle: '表单字段',
        setTitle: '表单集合',
        buttons: {
          create_collection: '新建集合'
        },
        fields: {
          DEFAULTC: '默认',
          NO: '标识(英文标题)',
          FIELDNAME: '字段名称',
          NAME: '中文标题',
          ENNAME: '英文标题',
          COLUMNS: '列数',
          WIDTH: '宽度',
          PEPTIDE: '分组',
          WLINE: '整行',
          EDITABLE: '可编辑',
          CONTROLAUTH: '控制权限',
          AUTHCODE: '授权码',
          ADDLIMIT: '添加约束',
          LIMITTYPE: '约束类型',
          OPTIONFIELD: '选择字段',
          TARGETVALUEl: '目标值',
          REQUIRED: '必填',
          RANGE: '值范围',
          PATTERN: '正则验证',
          TILED: '平铺',
          FORMLAYOUT: '表单布局',
          allowFormNull: '允许为空',
          changeControl: '变更控制'
        }
      },
      objectGrid: {
        title: '表格',
        objectTitle: '表格页字段',
        buttons: {
          add_normal_field: '业务字段',
          add_index_field: '序号字段',
          add_URL_field: 'URL字段',
          add_script_field: '脚本字段'
        },
        fields: {
          DEFAULTC: '默认',
          NO: '标识(英文标题)',
          FIELDNAME: '字段名称',
          NAME: '中文标题',
          ENNAME: '英文标题',
          TYPE: '表格类型',
          WIDTH: '列宽',
          ALIGN: '对齐方式',
          EDITABLE: '可编辑',
          GTYPE: '类型',
          valueScript: '显示值脚本',
          colorScript: '颜色脚本',
          PARAMS: '参数',
          SUPSORT: '支持排序',
          CONTROLAUTH: '控制权限',
          AUTHCODE: '授权码',
          appDisplay: 'APP显示',
          COPYABLE: '可复制'
        }
      },
      objectRelationPage: {
        title: '关联信息',
        objectTitle: '关联页页签',
        fields: {
          PROCESSCONTROL: '流程控制',
          DEFAULTC: '默认',
          FIELDNAME: '字段名称',
          objectNo: '标识(英文标题)',
          NO: '标识(英文标题)',
          NAME: '中文标题',
          ENNAME: '英文标题',
          RTYPE: '关联页类型',
          params: '参数',
          ICON: '图标',
          CURRENTOBJECTNO: '当前对象标识',
          OBJECTNO: '子对象标识',
          RELEVANCENO: '关联标识',
          RELEVANCENAME: '关联名称',
          RELEVANCENO1: '属性页标识',
          RELEVANCENAME1: '属性页名称',
          RELEVANCENO2: '关联关系标识',
          RELEVANCENAME2: '关联关系名称',
          RELEVANCENO3: '视图标识',
          RELEVANCENAME3: '视图名称',
          SUPQUERY: '支持搜索',
          OBJECTGRID: '查询对象表格',
          CONTROLAUTH: '控制权限',
          AUTHCODE: '授权码',
          TILED: '是否平铺',
          EXPAND: '是否默认展开',
          DYNAMIC: '是否动态'
        }
      },
      relatedEvents: {
        title: '级联事件',
        fields: {
          NO: '标识(英文标题)',
          FIELDNAME: '字段名称',
          NAME: '中文标题',
          TYPE: '类型',
          PARAMS: '参数',
          RELEVANCENO: '级联关系标识'
        }
      },
      dblclick: {
        title: '双击事件',
        fields: {}
      }
    },
    navMenu: {
      title: '导航菜单',
      title2: '页面菜单',
      fields: {
        NO: '标识',
        NAME: '中文标题',
        ENNAME: '英文标题',
        FACETYPE: '页面类型',
        TOP: '置顶',
        SUPQUERY: '支持搜索',
        INITDATA: '是否初始化',
        ICON: '图标',
        ICON_COLOR: '图标颜色',
        BG_COLOR: '背景颜色',
        FONT_COLOR: '字体颜色',
        banner: '图片',
        PARAMS: '参数',
        CUSER: '创建人',
        classObjectNo: '分类对象标识',
        classNodeObjectNo: '节点对象标识',
        viewNo: '视图标识',
        tableName: '数据库表名',
        objectNo: '业务对象标识',
        objectGridNo: '表格标识',
        objectRelationPageNo: '关联页标识',
        condition: 'SQL条件',
        reportId: '报表ID',
        reportName: '报表名称',
        isBddp: '大屏报表',
        checkProObjectNo: '检验项目对象标识',
        checkProRelationShipNo: '检验项目关系标识',
        checkResultObjectNo: '检验结果对象标识',
        checkResultRelationShipNo: '检验结果关系标识',
        add_mapping_field: '添加映射字段',
        add_content_field: '添加显示字段',
        sfield: '源字段',
        tfield: '目标字段',
        objectPropertyPageNo: '属性页标识',
        startTimeField: '开始时间',
        endTimeField: '结束时间',
        typeField: '类型字段',
        contentField: '显示字段',
        statisticsField: '是否统计',
        isClass: '业务分区',
        systemSubarea: '系统分区',
        dataClassField: '分区字段',
        classTabPosition: '分区页签位置',
        objectPropertyNo: '项目属性编号',
        parameter: '配置参数',
        OPERATION: '操作',
        appDisplay: 'APP显示',
        synchro_drag_sort: '是否确定同步建模',
        fieldName: '字段名',
        colWidth: '列宽',
        businessField: '业务字段',
        processField: '流程字段',
        sort: '排序',
        isStatistics: '是否统计',
        addBusinessField: '添加业务字段',
        addProcessField: '添加流程字段',
        mapFields: '映射字段'
      },
      procedures: {
        title: '存储过程',
        title2: '存储过程参数',
        fields: {
          NAME: '参数名',
          DATATYPE: '参数类型',
          MODEL: '参数模式',
          index: '序号'
        }
      }
    },
    relationship: {
      title: '关联关系',
      title2: '关系',
      fields: {
        NO: '标识',
        NAME: '中文标题',
        FIELDNAME: '字段名称',
        ENNAME: '英文标题',
        RELATIONOBJECT: '关系对象',
        OBJECTA: '对象A',
        OBJECTB: '对象B',
        POBJECT: '关系中的父对象',
        STATE: '状态',
        EFFECTIVE: '是否生效',
        VER: '版本',
        SUPQUERY: '支持搜索',
        SORTFIELDS: '排序字段',
        field: '字段',
        sort: '正序',
        CONTROLAUTH: '控制权限'
      }
    },
    inspectionModal: {
      title: '检验模板',
      reportTitle: '报告模板'
    },
    queryView: {
      title: '查询视图',
      fields: {
        NO: '标识',
        NAME: '中文标题',
        ENNAME: '英文标题',
        OBJECTNO: '查询对象',
        STATE: '状态',
        EFFECTIVE: '是否生效',
        VER: '版本',
        WCONDITION: '查询条件',
        CONTROLAUTH: '控制权限',
        COPYABLE: '支持复制',
        GRIDNO: '表格标识',
        PARAMS: '参数',
        outreach: '外联字段',
        SQL: '连接语句',
        TFNAME: '数据库字段名',
        EDITOR: '编辑器',
        EDITORPARAMS: '编辑器参数',
        FNO: '字段标识',
        FNAME: '字段名称',
        width: '宽度',
        index: '序列号',
        tableName: '表名',
        checkSql: 'SQL检查'
      }
    },
    calendarView: {
      title: '日历视图'
    },
    autoClass: {
      title: '自动分类视图',
      fields: {
        NO: '标识',
        NAME: '中文标题',
        ENNAME: '英文标题',
        OBJECTNO: '查询对象',
        WCONDITION: '查询条件',
        STATE: '状态',
        EFFECTIVE: '是否生效',
        VER: '版本',
        CONTROLAUTH: '控制权限',
        COPYABLE: '支持复制'
      },
      viewStructure: {
        title: '视图结构树',
        fields: {
          NO: '标识',
          NAME: '名称',
          ICON: '图标',
          ENNAME: '英文名称',
          SUMMARY: '显示数量',
          LOADDATASET: '加载数据',
          NODECONDITION: '节点SQL',
          DATACONDITION: '业务对象查询条件'
        }
      }
    },
    mqAffair: {
      title: '消息事务',
      fields: {
        NO: '标识',
        NAME: '名称',
        ENNAME: '英文名称',
        CHANNELNAME: '总线名称',
        MTYPE: '执行类型',
        MCONTENT: '执行内容',
        REQPARAM: '请求参数',
        WTYPE: '弹窗类型',
        ICON: '图标',
        IMPLCLASS: '信息总线/实现类'
      }
    },
    mqLines: {
      title: '信息总线',
      fields: {
        NO: '标识',
        NAME: '名称',
        ENNAME: '英文名称',
        REMARK: '备注'
      },
      mqListener: {
        title: '消息监听',
        fields: {
          NO: '标识',
          NAME: '名称',
          ENNAME: '英文名称',
          QUEUES: '监听队列'
        }
      }
    },
    reportManagement: '报表管理',
    gridReport: '网格报表',
    largeScreenReport: '大屏报表',
    reportDataSorce: '数据源配置',
    databaseQuery: {
      title: '数据库查询',
      querySql: 'SQL语句',
      result: '结果',
      queryQms: '查询QMS',
      querySpc: '查询SPC'
    },
    globalTable: {
      title: '全局表格',
      fields: {
        NO: '标识',
        NAME: '中文标题',
        ENNAME: '英文标题',
        REMARK: '备注',
        STATE: '状态',
        TYPE: '类型'
      },
      globalField: {
        title: '表格字段',
        buttons: {
          add_normal_field: '常规字段',
          add_index_field: '序号字段',
          add_script_field: '脚本字段'
        },
        fields: {
          NO: '字段标识',
          NAME: '字段名称',
          ENNAME: '英文名称',
          WIDTH: '列宽',
          ALIGN: '对齐方式',
          GTYPE: '字段类型',
          valueScript: '显示值脚本',
          colorScript: '颜色脚本',
          PARAMS: '参数',
          SUPSORT: '支持排序'
        }
      }
    },
    authCode: {
      title: '授权码管理',
      buttons: {
        add: '添加',
        update: '修改',
        remove: '移除'
      },
      fields: {
        NO: '标识',
        NAME: '名称',
        REMARK: '备注',
        ETIME: '到期时间'
      }
    },
    apiDocument: {
      title: 'Api文档',
      fields: {}
    },
    druidMonitor: {
      title: 'Druid监控',
      fields: {}
    },
    sheetTemplate: {
      title: '表格模板'
    },
    other: '其他'
  },
  changeHistory: {
    title: '变更历史明细',
    fields: {
      ACTION: '操作',
      cuser: '操作人',
      ctime: '操作时间',
      DETAILS: '变更明细'
    }
  },
  input: {
    title: '输入',
    buttons: {
      add_object: '添加对象',
      add_data: '添加数据',
      remove: '移除',
      view_data: '查看数据'
    },
    fields: {
      NO: '标识',
      NAME: '名称',
      ctime: '操作时间'
    }
  },
  userManage: {
    title: '人事管理',
    staffManage: {
      title1: '部门管理',
      title2: '用户管理',
      basic_info: '基本信息',
      login_info: '登录信息',
      buttons: {
        staff: '员工',
        create_staff: '新建用户',
        update_staff: '修改用户',
        delete_staff: '删除用户',
        import_staff: '导入用户',
        Personnel_adjustment: '人事调整',
        operation: '部门操作',
        create_department: '新建',
        update_department: '修改',
        delete_department: '删除',
        import_department: '导入',
        export_department: '导出',
        export_departmentUsers: '所有员工',
        export_quitUsers: '导出离职员工',
        export_Employee: '在职员工',
        export_employeeInformation: '导出',
        export_disabled: '未禁用',
        export_userAll: '所有',
        expoer_organization: '组织架构',
        reorganize: '组织调整'
      },
      fields: {
        MANAGE: '管理员',
        NODEPT: '未分配部门',
        DNO: '公司或部门代号',
        NAME: '公司或部门名称',
        DENAME: '公司或部门英文名称',
        DTEL: '联系电话',
        USERNAME: '用户名',
        SUNO: '工号',
        SUNAME: '员工姓名',
        SUTEL: '联系电话',
        MAIL: '邮箱',
        MAILPASSWORD: '邮箱密码',
        SAX: '性别',
        INTIME: '入职时间',
        IDCARD: '身份证号码',
        OPSTATE: '是否离职',
        NO: '公司或部门编号',
        // NAME: '部门名称',
        TEL: '联系电话',
        MANAGER: '部门经理',
        REMARK: '部门备注',
        USERTYPE: '用户类型',
        WOMEN: '女',
        MEN: '男',
        INTERNALUSER: '内部用户',
        SUPPLIER: '供应商',
        CUSTOMER: '客户',
        UNCLASSIFIED: '未分类'
      },
      staffUser: {
        title: '员工用户',
        title1: '员工信息',
        title2: '部门信息',
        buttons: {
          user: '用户',
          create_user: '新建用户',
          update_user: '修改用户',
          delete_user: '删除用户',
          assign_role: '分配角色',
          create_working_environment: '创建工作环境',
          assign_model_authority: '分配建模权限',
          cancel_model_authority: '取消建模权限',
          reset_password: '重置密码',
          user_disabled: '用户禁用',
          user_enabled: '解除禁用'
        },
        fields: {
          NAME: '用户名',
          SNAME: '用户名',
          ONDUTY: '在岗',
          WKCONTEXT: '有无工作环境',
          ALLOWMODEL: '有无建模权限',
          DISABLED: '禁用',
          PW_STIME: '密码生效时间',
          REMARK: '备注'
        }
      }
    },
    roleManage: {
      title: '角色',
      buttons: {
        create: '新建',
        create_role: '新建角色',
        create_roleGroup: '新建角色组',
        update_role: '修改',
        delete_role: '删除'
      },
      fields: {
        RNAME: '角色名称',
        REMARK: '角色说明',
        RTYPE: '类型'
      },
      authority: {
        title: '权限'
      },
      roleUser: {
        title: '角色用户',
        buttons: {
          add_user: '添加用户',
          remove_user: '移除用户'
        },
        fields: {
          SNAME: '用户名',
          NAME: '用户名',
          SUNAME: '员工姓名',
          ONDUTY: '在岗',
          WKCONTEXT: '有无工作环境',
          REMARK: '备注',
          department: '所属部门'
        }
      }
    }
  },
  systemPlatform: {
    Coding_specification: '编码规范',
    system_log: '系统日志',
    operation_log: '操作日志',
    fiel_log: '文件日志',
    service_log: '服务日志',
    others: '其他',
    report: '报表管理',
    systemLog: {
      serviceLog: {
        auto_refresh_interval_time: '自动刷新间隔时间(秒)',
        show_data_rows: '展示数据行',
        manual_refresh: '手动刷新',
        stop_refresh: '停止刷新',
        filter_logs: '筛选日志：',
        log_valid_time: '日志有效时间',
        automatic_database_backup_interval: '数据库自动备份间隔时间(天)：',
        manual_backup: '手工备份',
        detailed_information: '明细信息'
      },
      tableColumns: {
        OBJTN: '对象表名',
        OBJNAME: '对象名称',
        OBJID: '对象ID',
        ACTION: '操作',
        DETAILS: '操作明细',
        IP: 'IP',
        CTIME: '操作时间',
        CUSER: '操作人'
      }
    },
    ServiceConfig: {
      title: '服务配置',
      title2: '系统配置',
      button: {
        create: '新建',
        update: '修改',
        del: '删除'
      },
      fields: {
        NO: '编码',
        NAME: '名称',
        CONFIG_VALUE: '配置值',
        IS_DYNAMIC: '是否动态化',
        CUSER: '创建人',
        CTIME: '创建时间',
        MUSER: '修改人',
        MTIME: '修改时间'
      }
    },
    systemMailbox: {
      title: '系统邮箱',
      button: {
        create: '新建',
        update: '修改',
        del: '删除'
      },
      fields: {
        MAILLNAME: '邮箱名称',
        MAILADDRESS: '邮箱地址',
        MAILPASSWORD: '邮箱密码',
        STATE: '状态',
        MAILHOST: '服务地址',
        PortNum: '端口号',
        Agreement: '协议',
        CUSER: '创建人',
        CTIME: '创建时间'
      }
    },
    PollingTransact: {
      title: '轮询事务',
      buttons: {
        create: '新建',
        update: '修改',
        del: '删除',
        start: '启动',
        stop: '停止',
        restart: '重启'
      },
      fields: {
        TASKNAME: '任务名称',
        TASKREALIZATION: '任务实现',
        ISENABLE: '是否启用',
        POLLINGTIME: '轮询时间',
        POLLINGPARAMETERS: '轮询参数',
        OUTTIME: '超时时长（单位：ms）',
        DEFAULTSTART: '是否默认启动',
        REMARK: '备注',
        CREATEPERSON: '创建人',
        UPDATEPERSON: '修改人',
        STARTTIME: '启动时间',
        OPERATION: '操作',
        storeProcess: '存储过程',
        implclass: '实现类',
        procedureName: '存储过程名称',
        parameters: '存储过程入参',
        paramkey: '参数名',
        paramvalue: '参数值',
        taskParm: '任务参数'
      }
    },
    authCode: {
      title: '授权码管理',
      button1: {
        createAuth: '新建',
        updateAuth: '修改',
        delAuth: '删除'
      },
      field1: {
        CTIME: '创建时间',
        CUSER: '创建人',
        AUTHSCOPE: '授权范围',
        AUTHCODE: '授权码',
        AUTHDESCRIBE: '授权描述',
        STATE: '状态'
      }
    },
    codeStandard: {
      title: '编码规范',
      title1: '编码分类',
      title2: '编码详情',
      Coding: '编码示例',
      msg1: '请选择组或者前缀数据！',
      msg2: '请选择需要修改的数据!',
      msg3: '请输入编码段长！',
      msg4: '长度不能超出定义的段长！',
      msg5: '初始码不能大于终止码！',
      msg6: '确定要删除吗？',
      buttons: {
        newCodeingGroup: '新建编码组',
        newCode: '新建分类码',
        newPipelineGroup: '新建流水码',
        delete: '删除',
        update: '修改'
      },
      fields: {
        NAME: '名称',
        ENAME: '英文名称',
        OBJECT: '所属对象',
        TYPE: '编码类型',
        PREFIX: '编码',
        CONNECTOR: '连接符',
        CODE_SEGMENT: '编码段长',
        STARTCODE: '起始码',
        ENDCODE: '终止码',
        REMARK: '备注'
      }
    }
  },
  menu: {
    quality_inspection_entry: '质检录入'
  },
  table: {
    table_menu: '表格操作',
    export_selected_data: '导出选中数据',
    export_table_data: '导出表格数据',
    export_all_data: '导出全部数据',
    copy_cell_data: '复制单元格',
    copy_select_data: '复制选中行',
    copy_success: '复制成功',
    cell_data_null: '单元格数据为空',
    confirm_export_data: '确认导出？总计：',
    confirm_export_all_data: '确认导出全部数据？',
    fixed_column: '固定列',
    unpin_column: '取消固定',
    show_all_data: '查看全部数据',
    download_file: '下载文件'
  },
  file: {
    file_no_data: '文件不存在或者不支持预览',
    file_error: '连接文件服务器失败',
    file_is_loading: '文件正在加载中'
  },
  confirm: {
    prompt: '提示'
  },
  message: {
    buttonHoc: {
      select_node_message: '请先选择可加载数据节点'
    },
    notice: {
      message_sent_success: '消息发送成功'
    },
    todo: {
      select_the_data_first: '请先选中数据'
    },
    menu: {
      export_failed: '导出失败'
    },
    report: {
      no_data_selected: '没有选中数据，参数获取失败',
      configure_report: '请先配置报表API'
    },
    noSelectorForm: {
      failed_to_generate_code: ''
    },
    property: {
      select_data: '请先选择数据'
    }
  },
  todoTask: {
    fields: {
      NO: '任务编号',
      TITLE: '标题',
      SMESSAGE: '内容',
      SENDER: '发起人',
      TYPE: '重要程度',
      CTIME: '发起时间'
    },
    buttons: {
      begin_execution: '开始执行',
      mission_completed: '任务完成'
    }
  },
  activiti: (_activiti = {
    Online_design: '在线设计',
    Model_management: '流程设计',
    Process_management: '流程实例',
    In_operation: '运行中的流程',
    Task_ended: '已结束任务',
    Workflow_tasks: '工作流待办任务',
    Completed_tasks: '已办流程',
    My_application: '我的流程'
  }, _defineProperty(_activiti, "Workflow_tasks", '待办流程'), _defineProperty(_activiti, "Process_design", {
    modelNo: '模型标识',
    modelName: '模型名称',
    modelDesc: '模型描述',
    cTime: '创建时间',
    upTime: '更新时间',
    operation: '操作',
    buttons: {
      Online_design: '在线设计',
      deploy: '部署',
      create: '新建',
      update: '修改',
      delete: '删除',
      refresh: '刷新'
    },
    fields: {
      Model_management: '模型管理',
      sure_deploy: '确定要部署吗？',
      input_key: '请输入模型标识'
    }
  }), _defineProperty(_activiti, "Process_instance", {
    fields: {
      objectBind: '对象绑定',
      processNo: '流程标识',
      processName: '流程名称',
      processVersion: '流程版本',
      processPng: '流程图',
      deployTime: '部署时间',
      operation: '操作',
      activiTip: '确定要激活吗？',
      suspenTip: '确定要挂起吗？',
      delTip: '正在进行的流程也会删除，确定删除吗？',
      objectNo: '业务对象标识',
      objectName: '业务对象名称',
      condition: '条件',
      nodeField: '节点字段',
      radioOption: '单选项',
      state: '状态',
      processID: '流程实例ID',
      remark: '说明',
      alreadyDisable: '已禁用',
      alreadyEnable: '已启用',
      upObjTip: '修改业务对象会导致条件被清空',
      objNo: '对象标识',
      objName: '对象名称',
      keyWord: '关键词',
      fieldName: '字段名',
      rule: '匹配规则',
      leftLike: '左模糊',
      rightLike: '右模糊',
      allLike: '全模糊',
      fieldValue: '字段值',
      conditionDetail: '条件详情',
      processNode: '流程节点',
      processNodeName: '流程节点名称',
      objectEvent: '对象事件',
      eventName: '事件名称',
      bindEvent: '绑定事件',
      nodeEvent: '节点事件',
      noProcess: '无可用流程'
    },
    buttons: {
      create: '新建',
      activation: '激活',
      suspension: '挂起',
      delete: '删除',
      bind: '绑定',
      update: '修改',
      disabled: '禁用',
      enable: '启用',
      refresh: '刷新'
    }
  }), _defineProperty(_activiti, "processState", {
    fields: {
      index: '序号',
      title: '实例标题',
      processnName: '流程名称',
      type: '流程类别',
      personTask: '个人任务',
      propTask: '组任务',
      candidateTask: '候选人任务',
      curentLink: '当前环节',
      startName: '发起人',
      createTime: '创建时间',
      operation: '操作',
      actName: '执行环节',
      assignee: '执行人',
      startTime: '开始时间',
      endTime: '结束时间',
      subOpinions: '提交意见',
      conclusion: '结论',
      duration: '任务历时',
      name: '名称',
      userSelector: '用户选择',
      state: '状态',
      processState: '流程状态',
      underway: '进行中',
      sureCansell: '确定要撤销吗？',
      rejectCause: '驳回原因',
      transactionSuggest: '办理建议',
      viewingProcess: '查看流程图',
      agree: '同意',
      reject: '拒绝',
      opinion: '意见',
      required: '该项必填!',
      nodeInformation: '节点信息'
    },
    buttons: {
      transaction: '办理',
      schedule: '进度',
      pickup: '拾取',
      reject: '驳回',
      backTo: '驳回至',
      turnOver: '移交',
      turnTo: '转办',
      details: '详情',
      cancellation: '作废',
      cancellationCause: '作废原因',
      delete: '删除',
      cancell: '撤销',
      refresh: '刷新'
    }
  }), _activiti),
  qualityGate: {
    Quality_gate: '质量门',
    Data_panel: '数据面板',
    tasks: '待办任务',
    Role_management: '角色管理'
  },
  paramsa: (_paramsa = {
    NO: '标识',
    NAME: '名称',
    ENNAME: '英文名称',
    FACETYPE: '页面类型',
    SUPQUERY: '支持搜索',
    INITDATA: '是否初始化',
    ICON: '图标',
    PARAMS: '参数',
    CUSER: '创建人',
    classObjectNo: '分类对象标识',
    classNodeObjectNo: '节点对象标识',
    viewNo: '视图标识',
    objectNo: '业务对象标识',
    objectGridNo: '表格标识',
    objectRelationPageNo: '关联页标识',
    condition: 'SQL条件',
    reportId: '报表ID',
    reportName: '报表名称',
    isBddp: '大屏报表',
    checkProObjectNo: '检验项目对象标识',
    checkProRelationShipNo: '检验项目关系标识',
    checkResultObjectNo: '检验结果对象标识',
    checkResultRelationShipNo: '检验结果关系标识',
    add_mapping_field: '添加映射字段',
    add_content_field: '添加显示字段',
    sfield: '源字段',
    tfield: '目标字段',
    objectPropertyPageNo: '属性页标识',
    startTimeField: '开始时间',
    endTimeField: '结束时间',
    typeField: '类型字段',
    contentField: '显示字段',
    statisticsField: '是否统计',
    isClass: '是否分类',
    dataClassField: '分类字段',
    classTabPosition: '分类页签位置',
    objectPropertyNo: '项目属性编号',
    mapFields: '映射字段',
    contentFields: '显示字段',
    url: '路径',
    sortFields: '排序字段',
    RELATIONOBJECT: '关系对象',
    OBJECTA: '对象A',
    OBJECTB: '对象B',
    POBJECT: '关系中的父对象',
    STATE: '状态',
    EFFECTIVE: '是否生效',
    VER: '版本'
  }, _defineProperty(_paramsa, "SUPQUERY", '支持搜索'), _defineProperty(_paramsa, "SORTFIELDS", '排序字段'), _defineProperty(_paramsa, "field", '字段'), _defineProperty(_paramsa, "sort", '正序'), _defineProperty(_paramsa, "CONTROLAUTH", '控制权限'), _paramsa),
  copyright: {
    Aboutus: '关于我们',
    title: '质量管理系统',
    VersionNumber: '版本：',
    website: 'www.infinityqs.cn',
    //网址
    Copyright: 'Copyright © 2018-2022 IQS Corporation,All Rights Reserved',
    CopyrightZ: '供应商：盈飞无限管理软件'
  },
  enterInput: {
    defectForm: '缺陷表单',
    input_tab: '录入',
    message: {
      arabic_numerals_message: '请输入阿拉伯数字',
      start_input_message: '请点击开始录入！',
      inspection_completed_message: '已完成录入，检验完成！',
      input_complete_message: '输入完成！',
      please_select_file: '请选择文件',
      select_file_prompt1: '单击或拖动文件到该区域以上传',
      select_file_prompt2: '支持单次或批量上传',
      please_complete_the_entry: '请完成录入！',
      cleared_successfully: '清除成功',
      sampling_number_of_inspection_objects: '检验项目抽样数量必须大于0'
    },
    button: {
      clear_menu: '清除',
      clear_all: '所有',
      clear_selection: '选中项',
      batch_menu: '批量',
      batch_input_ok: '批量录入OK',
      batch_input_ng: '批量录入NG',
      import_cache: '导入缓存',
      switch_horizontal: '横向',
      switch_vertical: '纵向',
      start_input: '开始',
      refresh_cache: '刷新',
      save_input: '保存'
    },
    tooltip: {
      expand_drawer: '展开',
      collapse_drawer: '收起',
      collapse_selected_row: '收起选中行',
      expand_selected_row: '展开选中行',
      scroll_to_top: '滚动到顶部',
      scroll_to_bottom: '滚动到底部',
      no_control_sample_number: '不控制抽样数量',
      the_number_of_qualified: '合格数',
      unqualified_number: '不合格数',
      total_number_of_samples: '总抽样数'
    },
    confirm: {
      prompt: '提示',
      re_input_all: '清除所有缓存并重录，是否继续？',
      re_input_object: '清除缓存并重录，是否继续？',
      continue_input_next: '是否继续录入下一个',
      input_next: '是否录入下一个'
    },
    placeholder: {
      sample_sn: '样本SN',
      detection_value: '检测值'
    },
    modal: {
      import_cache_title: '导入缓存'
    },
    inspectObjectFields: {
      SAMPLE_NUMBER: '流水号',
      SAMPLESN: '样本号SN',
      INSRESULT: '检测值',
      RESULTREMARK: '结果备注'
    },
    inspectObjectTip: {
      inspection_equipment: '检验仪器：',
      upper_limit: '上限：',
      missing_upper_limit_or_calculator: '缺少上限值或计算符',
      target_value: '目标值：',
      lower_limit: '下限：',
      missing_lower_limit_or_calculator: '缺少下限值或计算符',
      determination: '判定：',
      color_box_desc: '颜色框说明：\n蓝：当前输入项\n绿：全部合格\n红：包含不合格\n黄：非必须判定项'
    },
    inspection: {
      templateID: '模板编号',
      templateName: '模板名称',
      inspectionOrderCalculator: '检验单业务对象',
      inspectionProjectCalculator: '检验项目业务对象',
      testResultCalculator: '检测结果业务对象',
      COUNTTYPECANINPUT: '计数型可输入',
      PNCANINPUT: '零件号可输入',
      isTakeEffect: '是否生效',
      templateType: '模板类型',
      reportTemplate: '报告模板',
      inspectionTemplate: '检验模板',
      tableNO: '表格编号',
      revision: '修订版本',
      creatReportTemplate: '新建报告模板',
      creatTemplate: '新建模板',
      inspectionItem: '检验项目',
      incompleteEntry: '未录入完成',
      selectCategory: ' 需选择项目大类',
      inputTestValue: '请输入检验值',
      formalError: '输入的数据格式不正确',
      greaterThan: '大于上限',
      lessThan: '小于上限',
      upperLimitDisqualified: '与上限相等不合格',
      lowerLimitDisqualified: '与下限相等不合格',
      parameterEmpty: '参数不能为空',
      notSaved: '录入数据未保存',
      selectData: '请选择数据',
      clearAll: '清除所有',
      removeSingle: '清除单项',
      submit: '提交',
      testValue: '检验值',
      conclusion: '检验结论',
      conclusionDescription: '结论描述',
      seriousBadNum: '严重不良项',
      insNumber: '检验数量',
      uq: '不合格数量',
      insUq: '请填写不合格数量',
      inputSeriousBadNum: '请填写严重不良项',
      minorBadNum: '轻微不良项',
      inputMinorBadNum: '请填写轻微不良项',
      defectDescription: '不良描述',
      inputDefectDescription: '请填写不良描述',
      scrapMethod: 'IQC报废方式',
      selectScrapMethod: '请选择IQC报废方式',
      handlingOpinion: 'IQC处理意见',
      selectHandlingOpinion: '请选择IQC处理意见',
      defectLevel: '缺陷级别',
      selectDefectLevel: '请选择缺陷级别',
      costCode: '成本代码',
      selectCostCode: '请选择成本代码',
      report: {
        export_failed: '导出失败',
        expoer_excel: '导出Excel',
        expoer_pdf: '导出PDF',
        start_flow: '启动流程',
        reject_recalibration: '驳回重检',
        sqe_notes: 'SQE意见',
        field_select: '字段选择'
      },
      scriptCalculate: '脚本计算',
      entryComplete: '录入完成',
      ts: '暂存',
      cancel: '取消',
      hint: '提示',
      hintInfo: '录入数据未保存，是否暂存？'
    }
  },
  JsScriptFields: {
    JsScriptLibrary: 'JS 脚本库',
    title: 'JS脚本字段',
    no: '标识',
    name: '名称',
    rType: '返回类型',
    remark: '备注',
    scriptValue: '脚本内容',
    scriptTest: '脚本测试',
    record: '传入参数',
    runResult: '运行结果',
    runScript: '执行脚本',
    creat: '新建',
    modify: '修改',
    delete: '删除',
    deleteScript: '删除脚本',
    content: '内容',
    tableName: '数据库表名',
    chineseName: '中文名称'
  },
  viewFields: _defineProperty({
    timeliness: '及时率',
    InspectionTimeliness: '检验及时率',
    rejectRatio: '到货不良批次率',
    query: '查询',
    year: '年',
    month: '月',
    week: '周',
    dppm: '供应商的DPPM',
    sample: '样件检验完成周期',
    dataTable: '数据表',
    PlanTime: '计划工时',
    InspectionTime: '检验工时',
    materialCN: '物料大类名称',
    materialSN: '物料小类名称',
    supplierName: '供应商名称',
    materialSeries: '物料系列',
    time: '时间',
    timeQuantum: '时间段',
    inspection: '抽检批次比例',
    the: '第',
    incomingBatches: '来料批次数',
    supplierRate: '供应商达标率',
    inspectionNum: '抽检数量比例',
    choice: '选择',
    materialBatchesTotal: '总来料批次数',
    timelinessTotal: '检验及时批次数',
    badnessTotal: '检验不良批次数',
    inspectionTotal: '总报检数量',
    badnessNum: '总不良数量',
    inspectionLotsTotal: '总检验批次数',
    inspectionNormalTotal: '正常检验批次数',
    samplingTotal: '总抽检数量',
    supplierIncomingTotal: '供应商来料批次数',
    supplierQualifiedTotal: '供应商达标批次数'
  }, "supplierRate", '供应商达标率'),
  dataDictionary: {
    title: '数据字典',
    create: '新建',
    module: '模块',
    moduleCode: '模块编码',
    classify: '分类',
    classifyCode: '分类编码',
    enName: '英文显示值',
    cName: '中文显示值',
    mapValue: '映射值',
    color: '颜色',
    index: '序号'
  }
};