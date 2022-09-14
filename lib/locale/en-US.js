"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _fields, _fields2, _paramsa, _inspection;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/*
 * @Description: 英文对照表
 */
var _default = {
  tipWords: {
    SelectiveFlowCode: 'Selective flow code',
    FailedToGenerateCode: 'Failed to generate code',
    name_msg: 'Be not in a correct format'
  },
  system: {},
  common: {
    index: 'Index',
    definition: 'Definition',
    SyncModal: 'Synchronized modeling takes a long time. Do you want to continue ?',
    delTip: 'Menu group under the data, whether to delete',
    QMS: 'Full life cycle quality execution system',
    please_enter: 'Please Enter',
    prompt: 'Prompt',
    ok: 'Ok',
    transfer: 'transfer',
    cancel: 'Cancel',
    recover: 'recover',
    save: 'Save',
    not_save: 'Do Not Save',
    giveup: 'Give Up',
    confirm: 'Confirm',
    delete: 'Delete',
    continue: 'Continue',
    confirm_deletion: 'Confirm to delete',
    confirm_execution: 'Confirm to perform this operation',
    edit: 'Edit',
    search: 'Search',
    advanced_search: 'Advanced Search',
    reset: 'Reset',
    is_required: 'Is Required',
    incorrect_format: 'Incorrect Format',
    select: 'Select',
    close: 'Close',
    send_messages: 'Send Messages',
    send_email: 'Send Email',
    prompt_message: 'please select a message first',
    prompt_user: 'please select a user',
    refresh: 'Refresh',
    move_node: 'Move Node',
    move_node_data: 'Move Node Data',
    please_select_node: 'Please select node',
    cannot_select_root_node: 'Cannot select root node',
    classification_object: 'Classification object',
    tab_context_menu: {
      close_current_tags: 'Close current tags',
      close_other_tags: 'Close other tags',
      close_all_tags: 'Close all tags'
    },
    save_error: 'Save failed',
    value_cannot_repeat: 'This value cannot be repeated',
    max_len: 'The maximum length',
    add_from_store: 'Add from menu library',
    please_select_file: 'Please select a file',
    select_file_prompt1: 'Click or drag the file to this area to upload',
    select_file_prompt2: 'Support single or batch upload',
    roleGroups_cannot_assigned_permissions: 'Role groups cannot be assigned permissions',
    switch_view: 'Switch View',
    jsScriptError: 'jsScript Error',
    expandAllNodes: 'Expand All Nodes',
    collapseAllNodes: 'Collapse All Nodes',
    wait_file_uploaded: 'Wait for the file upload to complete',
    makeSure: 'Are you sure '
  },
  login: {
    title: 'Login',
    userName: 'UserName',
    password: 'Password',
    inputJobNumber: 'Please enter your job number',
    inputPassword: 'Please enter your password'
  },
  header: {
    user: {
      start_modeling: 'Start Modeling',
      end_modeling: 'End Modeling',
      synchro_model: 'Synchro Model',
      user_center: 'Personal Center',
      yh_info: 'User Info',
      change_password: 'Change Password',
      about_us: 'About Us',
      logout: 'Logout',
      logout_msg: 'Is modeling being saved?',
      change_language: 'Change Language',
      change_password_info1: 'Two passwords are inconsistent',
      change_password_info2: 'The new password is the same as the old password',
      onlineUser: 'Online User',
      migrate_model_data: 'Migrate Model Data',
      schedule: 'Schedule',
      userTip: {
        avatar200KB: 'Avatar must smaller than 200KB!'
      },
      notice: {
        send_mail: 'Send Mail',
        reply_mail: 'Reply Mail',
        reply_message: 'Reply Message',
        send_message: 'Send Message',
        mark_read: 'Mark Read',
        cancel: 'Cancel',
        notification: 'Notification',
        task_agent: 'Task Agent',
        workflow_to_do: 'Workflow To Do',
        send_messages: 'Send Messages',
        send_email: 'Send Email',
        receiver: 'Receiver',
        send: 'Send',
        title: 'Title',
        content: 'Content',
        sender: 'Sender',
        readState: 'read state',
        senderTime: 'sender time',
        prompt_message: 'Please select a message first',
        message_sent_successfully: 'Message sent successfully',
        mail_sent_successfully: 'Mail sent successfully',
        notice_empty_text: 'You have viewed all notifications',
        todo_empty_text: 'You have completed all to do',
        act_todo_empty_text: 'You have completed all to do',
        plain_text: ' Plain text',
        rich_text: 'Rich text'
      },
      fields: {
        man: 'Man',
        women: 'Women',
        avatar: 'Avatar',
        employee_info: 'Employee Information',
        employeeNo: 'Job Number',
        employeeName: 'Employee Name',
        tel: 'Contact Number',
        mail: 'Mail',
        sax: 'Sax',
        age: 'Age',
        INTIME: 'Entry Time',
        idCard: 'Identification Number',
        wkSate: 'Working State',
        employeeRemark: 'Employee Notes',
        userName: 'User Login Name',
        userRemark: 'User Remark',
        depart: 'Department',
        departMentNo: 'Department Code',
        departMentName: 'Department Name',
        password: 'Password',
        newPassword: 'New Password',
        newPassword2: 'Confirm Password',
        ip: 'IP',
        loginTime: 'Login Time',
        osBowser: 'osBowser',
        loginWay: 'Login Way',
        singleSignOnSSO: 'Single Sign On(SSO)',
        systemLogin: 'System Login'
      }
    },
    message: {
      change_password_message: 'Please change the password in time',
      password_cannot_number: 'Password cannot be a pure number',
      length_out_of_range: 'New password length is out of range',
      contains_numbers_english: 'Must contain numbers and English',
      contains_special_characters: 'Must contain special characters',
      sync_not_completed: 'Synchronization is not completed, please do not close'
    },
    rule: {},
    iconTip: {
      online: 'Online users',
      notice: 'Notification',
      todo: 'Upcoming tasks'
    }
  },
  commonNavigation: {
    title: 'Common Navigation'
  },
  configPlatform: {
    title: 'Modeling Platform',
    index: 'Index',
    buttons: {
      select_show_obj: 'Select Display Object',
      show_business_obj: 'Display Business Objects',
      show_system_obj: 'Display System Objects',
      show_design_obj: 'Show Objects In Design',
      show_obsolete_obj: 'Show Obsolete Objects',
      show_synced_obj: 'Show Synced Objects',
      select_create_obj: 'Create Object',
      create_common_obj: 'Common Object',
      create_file_obj: 'File Object',
      create_relation_obj: 'Associated Object',
      create_class_obj: 'Classification Object',
      update: 'Update',
      delete: 'Delete',
      abolish: 'Abolish',
      create: 'Create',
      preview: 'Preview',
      cancel_upgrade: 'Cancel Change',
      synchro_model: 'Synchro Model',
      upgrade: 'Change',
      add: 'Add',
      copy_obj: 'Copy Object',
      copy_view: 'Copy View',
      refresh_meta: 'Refresh Meta',
      reorder: 'Reorder',
      changeFile: 'Change To File',
      move_node: 'Move Node',
      copy: 'copy',
      paste: 'paste',
      creatingRootNode: 'Creating A Root Node'
    },
    tableConfig: {
      title: 'Business Object',
      fields: {
        STATE: 'State',
        EFFECTIVE: 'Effective',
        VER: 'Version',
        OBJECTNO: 'Object No',
        VIEWNO: 'View No',
        VIEWNAME: 'View Name',
        TABLENAME: 'Table Name',
        NAME: 'Chinese Title',
        ENNAME: 'English Title',
        IDLIFE: 'ID Life',
        TYPE: 'Type',
        QUERYFIELDS: 'Query Fields',
        BRIEFEXP: 'Brief EXP',
        IMPLCLASS: 'Impl Class',
        REMARK: 'Remark',
        OPERATION: 'Operation',
        CONTROLAUTH: 'Control Auth',
        CONTRLFILE: 'Control file',
        multiLanguage: 'Multi Language'
      },
      fieldsProperty: {
        title: 'Fields List',
        buttons: {
          select_show_field: 'Select Show Field',
          show_business_field: 'Show Business Field',
          show_system_field: 'Show System Field',
          add_common_field: 'Add Common Field'
        },
        fields: {
          businessField: 'Business Field',
          systemField: 'System Field',
          NO: 'NO',
          FIELDNAME: 'Field Name',
          TTABLENAME: 'Table Name',
          NAME: 'Chinese Title',
          ENNAME: 'English Title',
          FTYPE: 'FType',
          FLENGTH: 'FLength',
          ACCURACY: 'Accuracy',
          ONLY: 'Only',
          ALLOWNULL: 'Allow Null',
          DEFAULTV: 'Default Val',
          EDITOR: 'Editor',
          EDITPARAMS: 'Edit Params',
          TYPE: 'Type',
          REMARK: 'Remark',
          SUPQUERY: 'Sup Query',
          SUPLINK: 'Sup Link',
          SUPCOPY: 'Sup Copy',
          condition: 'Condition',
          objectNo: 'Object No',
          viewNo: 'View No',
          LINKPARAMS: 'Link Params',
          rowHeight: 'Row Height',
          format: 'Format',
          canInput: 'Can Input',
          canMultipleChoice: 'Can Multiple Choice',
          canMultiSelect: 'Can Multiple Select',
          multiple: 'multiple',
          sql: 'Sql',
          selectMap: 'Select Map',
          tfield: 'tfield',
          sfield: 'sfield',
          searchFields: 'Search Fields',
          nfield: 'nfield',
          name: 'Name',
          key: 'Key',
          color: 'Color',
          field: 'Field',
          sort: 'Sort',
          visibilityToggle: 'visibility Toggle',
          TOBJECTNO: 'Object No',
          RELEVANCE: 'Relevance',
          RELEVANCENO: 'Relevance NO',
          parameter: 'configuration parameter',
          imgMultiple: 'Upload multiple pictures',
          imgMaxSize: 'Single image size (MB)',
          imgFormat: 'Support picture format',
          imgMaximum: 'Maximum number',
          icon: 'Icon',
          operation: 'Operation',
          edit: 'Edit',
          save: 'Save',
          cancel: 'Cancel',
          ok: 'OK',
          reset: 'Reset',
          left: 'left',
          right: 'right',
          center: 'center'
        },
        fields1: {
          addJsonFields: 'Add Json Fields',
          JsonFields: 'Json Fields',
          systemFields: 'System Fields',
          businessFields: 'Business Fields',
          linkType: 'Link Type',
          dataDrill: 'data Drill',
          aLabel: 'A Label Link',
          internalFile: 'Internal File',
          externalFile: 'External File',
          link: 'Link',
          relatedPage: 'Related Page',
          openField: 'On-state display value',
          closeField: 'Off state display value'
        }
      },
      objectMenu: {
        title: 'Object Row Event',
        buttons: {
          select_create_menu: 'Choose New Event',
          create_menu_group: 'New Event Group',
          create_menu_object: 'New Event',
          create_pre_processing: 'New pre-processing',
          create_post_processing: 'New post-processing',
          other_button: 'Other Buttons'
        },
        fields: {
          SORT: 'Drop Sort',
          NAME: 'Chinese Title',
          ENNAME: 'English Title',
          NO: 'No(English Title)',
          MTYPE: 'Event Type',
          TYPE: 'Type',
          PARAM: 'Other Buttons',
          WTYPE: 'Pop-up Window Type',
          ICON: 'Icon',
          OBJECTNO: 'Object ID',
          SOBJECTNO: 'Source Object ID',
          TABLENAME: 'Database TableName',
          STABLENAME: 'Source Database TableName',
          BATCH: 'Bulk Upload',
          MNO: 'Pop-up Window Logo',
          IMPLTYPE: 'Implementation Method',
          IMPLCLASS: 'Implementation Class',
          PROPERTYPARAM: 'Property Page Parameters',
          REQPARAM: 'Request Parameters',
          isBddp: 'Large Screen Report',
          reportId: 'Report ID',
          reportName: 'Report Name',
          isDynamic: 'Dynamic Parameters',
          name: 'Parameter Name',
          key: 'Value',
          modal_params: 'Pop-up Window Parameters',
          impl_params: 'Implementation Parameters',
          procedures: 'Store Procedure Name',
          COMMENT: 'Description',
          main_object_params: 'Main Object Params',
          parent_object_params: 'Parent Object Params',
          relationship_object_params: 'Relationship Object Params',
          class_page_params: 'Class Page Params',
          tree_table_object_param: 'Tree Table Object Param',
          other_params: 'Other Params',
          add_default_value: 'Add Default Value',
          add_mapping_field: 'Add Mapping Field（Parent）',
          sfield: 'Source Field',
          tfield: 'Target Field',
          field: 'Field',
          customParam: 'CustomParam',
          disabledAction: 'Control Disabled',
          CONTROLAUTH: 'Control Auth',
          AUTHCODE: 'Authcode',
          RESTFUL: 'Api',
          IS_DYNAMIC: 'Is Dynamic'
        }
      },
      objectProperty: {
        title: 'Form',
        objectTitle: 'Property page field',
        setTitle: 'Property page collection',
        buttons: {
          create_collection: 'New Collection'
        },
        fields: {
          SORT: 'Drop Sort',
          DEFAULTC: 'Default',
          NO: ' Logo (English Title)',
          FIELDNAME: 'Field Name',
          NAME: 'Chinese Title',
          ENNAME: 'English Title',
          COLUMNS: 'Number of columns',
          WIDTH: 'Width',
          PEPTIDE: 'Grouping',
          WLINE: 'Entire line',
          EDITABLE: 'Editable',
          CONTROLAUTH: 'CONTROLAUTH',
          AUTHCODE: 'Auth Code',
          ADDLIMIT: 'addLimit',
          LIMITTYPE: 'limitType',
          OPTIONFIELD: 'optionField',
          TARGETVALUE: 'targetValue',
          REQUIRED: 'required',
          RANGE: 'range',
          PATTERN: 'Tiled',
          TILED: 'Tiled',
          FORMLAYOUT: 'Form Layout',
          allowFormNull: 'Allow null',
          changeControl: 'Change Control'
        }
      },
      objectGrid: {
        title: 'Table',
        objectTitle: 'Table page field',
        buttons: {
          add_normal_field: 'Normal Field',
          add_index_field: 'Index Field',
          add_URL_field: 'URL Field',
          add_script_field: 'Script Field'
        },
        fields: {
          SORT: 'Drop Sort',
          DEFAULTC: 'Default',
          NO: 'Logo(English Title)',
          FIELDNAME: 'Field Name',
          NAME: 'Chinese Title',
          ENNAME: 'English Title',
          TYPE: 'Table type',
          WIDTH: 'Column width',
          ALIGN: 'Alignment',
          EDITABLE: 'Editable',
          GTYPE: 'Gtype',
          valueScript: 'valueScript',
          colorScript: 'colorScript',
          PARAMS: 'params',
          SUPSORT: 'Sup Sort',
          CONTROLAUTH: 'Control Auth',
          AUTHCODE: 'Auth Code',
          appDisplay: 'App Display',
          COPYABLE: 'Copy'
        }
      },
      objectRelationPage: {
        title: 'Object Related Info',
        objectTitle: 'Related Page Tab',
        fields: (_fields = {
          PROCESSCONTROL: 'Process Control',
          SORT: 'Drop Sort',
          DEFAULTC: 'Default',
          FIELDNAME: 'Field Name',
          objectNo: 'Tab Logo',
          NO: 'Logo(English Title)',
          NAME: 'Chinese Title',
          ENNAME: 'English Title',
          RTYPE: 'Related Page Type',
          params: 'Parameters',
          ICON: 'Icon',
          OBJECTNO: 'Object ID',
          RELEVANCENO: 'Association Logo'
        }, _defineProperty(_fields, "RELEVANCENO", 'Relevance No'), _defineProperty(_fields, "RELEVANCENAME", 'Related Name'), _defineProperty(_fields, "RELEVANCENO1", 'Property Page Identification'), _defineProperty(_fields, "RELEVANCENAME1", 'Property Page Name'), _defineProperty(_fields, "RELEVANCENO2", 'Relationship ID'), _defineProperty(_fields, "RELEVANCENAME2", 'Relationship Name'), _defineProperty(_fields, "RELEVANCENO3", 'View Logo'), _defineProperty(_fields, "RELEVANCENAME3", 'View Name'), _defineProperty(_fields, "SUPQUERY", 'Support Search'), _defineProperty(_fields, "OBJECTGRID", 'Related Object Table'), _defineProperty(_fields, "CONTROLAUTH", 'Control Auth'), _defineProperty(_fields, "AUTHCODE", 'Auth Code'), _defineProperty(_fields, "TILED", 'Is Tile'), _defineProperty(_fields, "EXPAND", 'Is Expand'), _defineProperty(_fields, "DYNAMIC", 'Is Dynamic'), _fields)
      },
      relatedEvents: {
        title: 'Related Events',
        fields: {
          NO: 'NO( English Title)',
          FIELDNAME: 'Field Name',
          NAME: 'Chinese Title',
          TYPE: 'Type',
          PARAMS: 'Params',
          RELEVANCENO: 'Relevance No'
        }
      },
      apiDocument: {
        title: 'Api Document',
        fields: {}
      },
      druidMonitor: {
        title: 'Druid Monitor',
        fields: {}
      },
      dblclick: {
        title: 'Double Click',
        fields: {}
      }
    },
    navMenu: {
      title: 'Navigation Menu',
      title2: 'Page Menu',
      fields: {
        NO: 'Logo',
        NAME: 'Chinese Title',
        ENNAME: 'English Title',
        FACETYPE: 'Page Type',
        TOP: 'Top',
        SUPQUERY: 'Support Search',
        INITDATA: 'Whether To Initialize',
        ICON: 'Icon',
        ICON_COLOR: 'Icon color',
        BG_COLOR: 'Background color',
        FONT_COLOR: 'Font color',
        banner: 'Banner',
        PARAMS: 'Parameters',
        CUSER: 'Creator',
        classObjectNo: 'Classification Object Identification',
        classNodeObjectNo: 'Node Object ID',
        viewNo: 'View Logo',
        tableName: 'Data Base Table Name',
        objectNo: 'Business Object ID',
        objectGridNo: 'Table ID',
        objectRelationPageNo: 'Related Page Identification',
        condition: 'SQL Condition',
        reportId: 'Report ID',
        reportName: 'Report Name',
        isBddp: 'Large Screen Report',
        checkProObjectNo: 'CheckProObjectNo',
        checkProRelationShipNo: 'CheckProRelationShipNo',
        checkResultObjectNo: 'CheckResultObjectNo',
        checkResultRelationShipNo: 'CheckResultRelationShipNo',
        add_mapping_field: 'Add Mapping Field',
        add_content_field: 'Add Content Field',
        sfield: 'sfield',
        tfield: 'tfield',
        objectPropertyPageNo: 'objectPropertyPageNo',
        startTimeField: 'Start Time',
        endTimeField: 'End Time',
        typeField: 'Type Field',
        contentField: 'Content Field',
        statisticsField: 'Statistics Field',
        isClass: 'Business Partition',
        systemSubarea: 'System Partition',
        dataClassField: 'Classification Field',
        classTabPosition: 'Category Tab Location',
        objectPropertyNo: 'Item Property No',
        parameter: 'Configuration Parameter',
        OPERATION: 'Operation',
        appDisplay: 'App Display',
        fieldName: 'Field Name',
        colWidth: 'colWidth',
        businessField: 'Business Field',
        processField: 'Process Field',
        sort: 'Sort',
        isStatistics: 'Is Statistics',
        addBusinessField: 'Adding a Business Field',
        addProcessField: 'Adding a Process Field',
        mapFields: 'Map Fields'
      },
      procedures: {
        title: 'Procedures',
        title2: 'Procedures Params',
        fields: {
          NAME: 'Name',
          DATATYPE: 'Data Type',
          MODEL: 'Model',
          index: 'index'
        }
      }
    },
    relationship: {
      title: 'Relation Ship',
      title2: 'Relation Ship',
      fields: {
        NO: 'Logo',
        NAME: 'Chinese Title',
        FIELDNAME: 'Field Name',
        ENNAME: 'English Title',
        RELATIONOBJECT: 'Relationship Object',
        OBJECTA: 'Object A',
        OBJECTB: 'Object B',
        POBJECT: 'Parent object in relationship',
        STATE: 'State',
        EFFECTIVE: 'Is It Effective',
        VER: 'Version',
        SUPQUERY: 'Support Search',
        SORTFIELDS: 'Sort Field',
        field: 'Field',
        sort: 'Positive Order',
        CONTROLAUTH: 'Control Auth'
      }
    },
    inspectionModal: {
      title: 'Inspection Template',
      reportTitle: 'Report Template'
    },
    queryView: {
      title: 'Query View',
      fields: {
        NO: 'Logo',
        NAME: 'Chinese Title',
        ENNAME: 'English Title',
        OBJECTNO: 'Query Object',
        STATE: 'State',
        EFFECTIVE: 'Is It Effective',
        VER: 'Version',
        WCONDITION: 'Query Condition',
        CONTROLAUTH: 'Control Authority',
        COPYABLE: 'Copy Support',
        GRIDNO: 'Grid No',
        PARAMS: 'Params',
        outreach: 'Outreach',
        SQL: 'SQL',
        TFNAME: 'TFName',
        EDITOR: 'Editor',
        EDITORPARAMS: 'Editor Params',
        FNO: 'FNo',
        FNAME: 'FName',
        width: 'Width',
        index: 'Index',
        tableName: 'Table Name',
        checkSql: 'Check Sql'
      }
    },
    calendarView: {
      title: 'Calendar View'
    },
    autoClass: {
      title: 'Automatic Classification View',
      fields: {
        NO: 'Logo',
        NAME: 'Chinese Title',
        ENNAME: 'English Title',
        OBJECTNO: 'Query Object',
        WCONDITION: 'Query Condition',
        STATE: 'State',
        EFFECTIVE: 'Is It Effective',
        VER: 'Version',
        CONTROLAUTH: 'Control Authority',
        COPYABLE: 'Copy Support'
      },
      viewStructure: {
        title: 'View Tree',
        fields: {
          NO: 'Logo',
          NAME: 'Name',
          ICON: 'icon',
          ENNAME: 'English Mame',
          SUMMARY: 'Display Quantity',
          LOADDATASET: 'Load Data',
          NODECONDITION: 'Node SQL',
          DATACONDITION: 'Business object query conditions'
        }
      }
    },
    mqAffair: {
      title: 'Message Transaction',
      fields: {
        NO: 'Logo',
        NAME: 'Name',
        ENNAME: 'English Name',
        CHANNELNAME: 'Bus Name',
        MTYPE: 'Execution Type',
        TYPE: 'Type',
        MCONTENT: 'Execution Content',
        REQPARAM: 'Request Parameters',
        WTYPE: 'Pop-up Window Type',
        ICON: 'Icon',
        IMPLCLASS: 'Information bus/implementation class'
      }
    },
    mqLines: {
      title: 'Information Bus',
      fields: {
        NO: 'Logo',
        NAME: 'Name',
        ENNAME: 'English Name',
        REMARK: 'Remarks'
      },
      mqListener: {
        title: 'Message Monitor',
        fields: {
          NO: 'Logo',
          NAME: 'Name',
          ENNAME: 'English Name',
          QUEUES: 'Listening Queue'
        }
      }
    },
    reportManagement: 'Report Management',
    gridReport: 'Grid Report',
    largeScreenReport: 'Large Screen Report',
    reportDataSorce: 'Report DataSorce',
    databaseQuery: {
      title: 'Database Query',
      querySql: 'Query Sql',
      result: 'Result',
      queryQms: 'Query QMS',
      querySpc: 'Query SPC'
    },
    globalTable: {
      title: 'Global Form',
      fields: {
        NO: 'Logo',
        NAME: 'Chinese Title',
        ENNAME: 'English Title',
        REMARK: 'Remarks',
        STATE: 'State',
        TYPE: 'Type'
      },
      globalField: {
        title: 'Table Field',
        buttons: {
          add_normal_field: 'Add Normal Field',
          add_index_field: 'Add Index Field',
          add_script_field: 'Add script Field'
        },
        fields: {
          NO: 'Field Identification',
          NAME: 'Field Name',
          ENNAME: 'English Name',
          WIDTH: 'Column Width',
          ALIGN: 'Alignment',
          GTYPE: 'Gtype',
          valueScript: 'Value Script',
          colorScript: 'Color Script',
          PARAMS: 'Params',
          SUPSORT: 'Support Sort'
        }
      }
    },
    authCode: {
      title: 'Auth Code',
      buttons: {
        add: 'Add',
        update: 'Update',
        remove: 'Remove'
      },
      fields: {
        NO: 'NO',
        NAME: 'Name',
        REMARK: 'Remark',
        ETIME: 'Etime'
      }
    },
    apiDocument: {
      title: 'Api Document',
      fields: {}
    },
    druidMonitor: {
      title: 'Druid Monitor',
      fields: {}
    },
    sheetTemplate: {
      title: 'Sheet Template'
    },
    other: 'Other'
  },
  changeHistory: {
    title: 'Change History Details',
    fields: {
      ACTION: 'Operation',
      cuser: 'Operator',
      ctime: 'Operation Time',
      DETAILS: 'Change Details'
    }
  },
  input: {
    title: 'Enter',
    buttons: {
      add_object: 'Add object',
      add_data: 'Add data',
      remove: 'Remove',
      view_data: 'View Data'
    },
    fields: {
      NO: 'NO',
      NAME: 'Name',
      ctime: 'Operation Time'
    }
  },
  userManage: {
    title: 'User Management',
    staffManage: {
      title1: 'Department Management',
      title2: 'Employee management',
      buttons: {
        staff: 'Employee',
        create_staff: 'New Employee',
        update_staff: 'Modify Employee',
        delete_staff: 'Delete Employee',
        import_staff: 'Import User',
        Personnel_adjustment: 'Personnel Adjustment',
        operation: 'Operation',
        create_department: 'New Department',
        update_department: 'Modify Department',
        delete_department: 'Delete Department',
        import_department: 'Import Department',
        export_department: 'department',
        export_departmentUsers: 'DepartmentUsers',
        export_quitUsers: 'QuitUsers',
        export_Employee: 'Employee',
        export_employeeInformation: 'Export',
        export_disabled: 'Not disabled',
        export_userAll: 'All',
        expoer_organization: 'Organization',
        reorganize: 'Reorganize'
      },
      fields: (_fields2 = {
        MANAGE: 'Admin',
        NODEPT: 'Unassigned Department',
        DNO: 'Company or Department Code',
        NAME: 'Company or department name',
        DENAME: 'Company or department enname',
        DTEL: 'Contact Number',
        USERNAME: 'User Name',
        SUNO: 'Work Number',
        SUNAME: 'Employee Name',
        SUTEL: 'Contact Number',
        MAIL: 'Mailbox',
        MAILPASSWORD: 'Mail Password',
        SAX: 'Gender',
        INTIME: 'Join Time',
        IDCARD: 'ID card number',
        OPSTATE: 'Do you want to leave?',
        NO: 'NO'
      }, _defineProperty(_fields2, "NAME", 'NAME'), _defineProperty(_fields2, "TEL", 'TEL'), _defineProperty(_fields2, "MANAGER", 'Manager'), _defineProperty(_fields2, "REMARK", 'Remark'), _defineProperty(_fields2, "USERTYPE", 'User Type'), _defineProperty(_fields2, "WOMEN", 'Women'), _defineProperty(_fields2, "MEN", 'Men'), _defineProperty(_fields2, "INTERNALUSER", 'Internal User'), _defineProperty(_fields2, "SUPPLIER", 'Supplier'), _defineProperty(_fields2, "CUSTOMER", 'Customer'), _fields2),
      staffUser: {
        title: 'Employee User',
        title1: 'Employee Info',
        title2: 'department Info',
        buttons: {
          user: 'User',
          create_user: 'New User',
          update_user: 'Modify User',
          delete_user: 'Delete User',
          assign_role: 'Assign Role',
          create_working_environment: 'Create Working Environment',
          assign_model_authority: 'Assign Model Authority',
          cancel_model_authority: 'Cancel Model Authority',
          reset_password: 'Reset Password',
          user_disabled: 'Diable',
          user_enabled: 'Enable'
        },
        fields: {
          NAME: 'Username',
          SNAME: 'Username',
          ONDUTY: 'On duty',
          WKCONTEXT: 'With or without working environment',
          ALLOWMODEL: 'Allow Model',
          DISABLED: 'Disabled',
          PW_STIME: 'Password effective time',
          REMARK: 'Remarks'
        }
      }
    },
    roleManage: {
      title: 'Character',
      buttons: {
        create: 'New',
        create_role: 'New Role',
        create_roleGroup: 'New Role Group',
        update_role: 'Modify',
        delete_role: 'Delete'
      },
      fields: {
        RNAME: 'Character Name',
        REMARK: 'Character Description',
        RTYPE: 'Type'
      },
      authority: {
        title: 'Permissions'
      },
      roleUser: {
        title: 'Role User',
        buttons: {
          add_user: 'Add User',
          remove_user: 'Remove User'
        },
        fields: {
          SNAME: 'Username',
          NAME: 'Username',
          SUNAME: 'Employee Name',
          ONDUTY: 'On duty',
          WKCONTEXT: 'With or without working environment',
          REMARK: 'Remarks'
        }
      }
    }
  },
  systemPlatform: {
    Coding_specification: 'Coding Specification',
    system_log: 'System Log',
    operation_log: 'Operation Log',
    fiel_log: 'Fiel Log',
    service_log: 'Service Log',
    others: 'Other',
    report: 'reportManagement',
    systemLog: {
      serviceLog: {
        auto_refresh_interval_time: 'Auto Refresh Interval Time(s)',
        show_data_rows: 'Show Data Rows',
        manual_refresh: 'Manual Refresh',
        stop_refresh: 'Stop Refresh',
        filter_logs: 'Filter Logs:',
        log_valid_time: 'Log Valid Time',
        automatic_database_backup_interval: 'Automatic Database Backup Interval(day)：',
        manual_backup: 'Manual Backup',
        detailed_information: 'Detailed Information'
      },
      tableColumns: {
        OBJTN: 'OBJ TN',
        OBJNAME: 'OBJ Name',
        OBJID: 'OBJ ID',
        ACTION: 'Action',
        DETAILS: 'Details',
        IP: 'IP',
        CTIME: 'Ctime',
        CUSER: 'Cuser'
      }
    },
    ServiceConfig: {
      title: 'Service Config',
      title2: 'System Config',
      button: {
        create: 'Create',
        update: 'Update',
        del: 'Delete'
      },
      fields: {
        NO: 'NO',
        NAME: 'Name',
        CONFIG_VALUE: 'Config Value',
        IS_DYNAMIC: 'Is Dynamic',
        CUSER: 'Cuser',
        CTIME: 'Ctime',
        MUSER: 'Muser',
        MTIME: 'Mtime'
      }
    },
    systemMailbox: {
      title: 'System Mailbox',
      button: {
        create: 'Create',
        update: 'Update',
        del: 'Delete'
      },
      fields: {
        MAILLNAME: 'Maill Name',
        MAILADDRESS: ' Mail Address',
        MAILPASSWORD: 'Mail Password',
        STATE: 'Start',
        MAILHOST: 'Mail Host',
        PortNum: 'Port Number',
        Agreement: 'Agreement',
        CUSER: 'Cuser',
        CTIME: 'CTime'
      }
    },
    PollingTransact: {
      title: 'PollingTransac',
      buttons: {
        create: 'Create',
        update: 'Update',
        del: 'Delete',
        start: 'Start',
        stop: 'Stop',
        restart: 'Restart'
      },
      fields: {
        TASKNAME: 'Task Name',
        TASKREALIZATION: 'Task Realization',
        ISENABLE: 'Is Enable',
        POLLINGTIME: 'Polling Time',
        POLLINGPARAMETERS: ' ARG',
        OUTTIME: 'Out Time（UNIT：ms）',
        DEFAULTSTART: ' Default Start',
        REMARK: 'Remark',
        CREATEPERSON: 'Create Person',
        UPDATEPERSON: 'Update Person',
        STARTTIME: 'Start Time',
        OPERATION: 'Operation',
        storeProcess: 'Store Process',
        implclass: 'Implclass',
        procedureName: 'Procedure Name',
        parameters: 'Parameters',
        paramkey: 'Param Key',
        paramvalue: 'Param Value',
        taskParm: 'Task Parm'
      }
    },
    authCode: {
      title: 'Auth Code',
      button1: {
        createAuth: 'Create Auth Code',
        updateAuth: 'Update Auth Code',
        delAuth: 'Delete Auth Code'
      },
      field1: {
        CTIME: 'Ctime',
        CUSER: 'Cuser',
        AUTHSCOPE: 'Auth Scope',
        AUTHCODE: 'Auth Code',
        AUTHDESCRIBE: 'Auth Describe',
        STATE: 'State'
      }
    },
    codeStandard: {
      title: 'Code Specification',
      title1: 'Code Classification',
      title2: 'Encoding Details',
      Coding: 'Coding Example',
      msg1: 'Please select group or prefix data! ',
      msg2: 'Please select the data to be modified!',
      msg3: 'Please enter the code segment length! ',
      msg4: 'The length cannot exceed the defined segment length! ',
      msg5: 'The initial code cannot be greater than the termination code! ',
      msg6: 'Are you sure you want to delete it!',
      buttons: {
        newCodeingGroup: 'New Coding Group',
        newCode: 'New Classification Code',
        newPipelineGroup: 'New Pipeline Code',
        delete: 'Delete',
        update: 'Modify'
      },
      fields: {
        NAME: 'Name',
        ENAME: 'EName',
        OBJECT: 'Owned object',
        TYPE: 'Encoding type',
        PREFIX: 'Encoding',
        CONNECTOR: 'Connector',
        CODE_SEGMENT: 'Code segment length',
        STARTCODE: 'Start code',
        ENDCODE: 'End code',
        REMARK: 'Remarks'
      }
    }
  },
  menu: {
    quality_inspection_entry: 'Quality Inspection Entry'
  },
  table: {
    table_menu: 'Table Operation',
    export_selected_data: 'Export Selected Data',
    export_table_data: 'Export Table Data',
    export_all_data: 'Export All Data',
    copy_cell_data: 'Copy Cell Data',
    copy_select_data: 'Copy Select Data',
    copy_success: 'Copy Successfully',
    cell_data_null: 'Cell Data Is Empty',
    confirm_export_data: 'Confirm export? total:',
    confirm_export_all_data: 'Confirm to export all data?',
    fixed_column: 'Fixed column',
    unpin_column: 'Unpin',
    show_all_data: 'Show all data',
    download_file: 'Download File'
  },
  file: {
    file_no_data: 'File does not exist or does not support preview',
    file_error: 'Failed to connect to file server',
    file_is_loading: 'File is loading'
  },
  confirm: {
    prompt: 'Prompt'
  },
  message: {
    buttonHoc: {
      select_node_message: 'Please select a loadable data node first'
    },
    notice: {
      message_sent_success: 'Message sent successfully'
    },
    todo: {
      select_the_data_first: 'Please select the data first'
    },
    menu: {
      export_failed: 'Export failed'
    },
    report: {
      no_data_selected: 'No data selected, parameter acquisition failed',
      configure_report: 'Please configure the report API first'
    },
    noSelectorForm: {
      failed_to_generate_code: ''
    },
    property: {
      select_data: 'Please select data first'
    }
  },
  todoTask: {
    fields: {
      NO: 'NO',
      TITLE: 'Title',
      SMESSAGE: 'Message',
      SENDER: 'Sender',
      TYPE: 'Type',
      CTIME: 'CTime'
    },
    buttons: {
      begin_execution: 'Begin Execution',
      mission_completed: 'Mission Completed'
    }
  },
  activiti: {
    Online_design: 'OnlineDesign',
    Model_management: 'Process Design',
    Process_management: 'Process Instance',
    In_operation: 'In Operation',
    Task_ended: 'Task Ended',
    Workflow_tasks: 'Workflow Tasks',
    Completed_tasks: 'Completed Tasks',
    My_application: 'My Application',
    Workflow_tasks2: 'Workflow Tasks',
    Process_design: {
      modelNo: 'Model No',
      modelName: 'Model Name',
      modelDesc: 'Model Description',
      cTime: 'Create Time',
      upTime: 'Update Time',
      operation: 'Operation',
      buttons: {
        Online_design: 'Online Design',
        deploy: 'Deploy',
        create: 'Create',
        update: 'Update',
        delete: 'Delete',
        refresh: 'Refresh'
      },
      fields: {
        Model_management: 'Model Management',
        sure_deploy: 'Are you sure you want to deploy?',
        input_key: 'Please enter the model id'
      }
    },
    Process_instance: {
      fields: {
        objectBind: 'Object Bind',
        processNo: 'Process No',
        processName: 'Process Name',
        processVersion: 'Process Version',
        processPng: 'Process Png',
        deployTime: 'Deploy Time',
        operation: 'Operation',
        activiTip: 'Are you sure you want to activate it?',
        suspenTip: 'Are you sure you want to hang it?',
        delTip: 'Ongoing processes will also be deleted. Are you sure?',
        objectNo: 'Object No',
        objectName: 'Object Name',
        condition: 'Condition',
        nodeField: 'Node Field',
        radioOption: 'Radio Option',
        state: 'State',
        processID: 'Process ID',
        remark: 'Remark',
        alreadyDisable: 'Already Disable',
        alreadyEnable: 'Already Enable',
        upObjTip: 'Modifying a business object causes conditions to be cleared',
        objNo: 'Object No',
        objName: 'Object Name',
        keyWord: 'Key Word',
        fieldName: 'Field Name',
        rule: 'Rule',
        leftLike: 'Left Like',
        rightLike: 'Right Like',
        allLike: 'All Like',
        fieldValue: 'Field Value',
        conditionDetail: 'Condition Detail',
        processNode: 'Process Node',
        processNodeName: 'Process Node Name',
        objectEvent: 'Object Event',
        eventName: 'Event Name',
        bindEvent: 'Bind Event',
        nodeEvent: 'Node Event',
        noProcess: 'No Process Is Available'
      },
      buttons: {
        create: 'create',
        activation: 'activation',
        suspension: 'suspension',
        delete: 'delete',
        bind: 'delete',
        update: 'update',
        disabled: 'disable',
        enable: 'enable',
        refresh: 'refresh'
      }
    },
    processState: {
      fields: {
        index: 'no',
        title: 'Title',
        processnName: 'Processn Name',
        type: 'Process Type',
        personTask: 'Person Task',
        propTask: 'Prop Task',
        candidateTask: 'Candidate Task',
        curentLink: 'Curent Link',
        startName: 'Start Name',
        createTime: 'Create Time',
        operation: 'Operation',
        actName: 'Perform Link',
        assignee: 'Perform Person',
        startTime: 'Start Time',
        endTime: 'End Time',
        subOpinions: 'Submit Opinions',
        duration: 'Duration',
        name: 'Name',
        userSelector: 'User Selector',
        state: 'State',
        processState: 'Process State',
        conclusion: 'Conclusion',
        underway: 'Underway',
        sureCansell: 'Are you sure you want to undo it?',
        rejectCause: 'Reject Cause',
        transactionSuggest: 'Transaction Suggest',
        viewingProcess: 'Viewing Process',
        agree: 'Agree',
        reject: 'Reject',
        opinion: 'Opinion',
        required: 'Required',
        nodeInformation: 'Node Information'
      },
      buttons: {
        transaction: 'Transaction',
        schedule: 'Schedule',
        pickup: 'Pickup',
        reject: 'Reject',
        backTo: 'Back To',
        turnOver: 'Turn Over',
        turnTo: 'Turn To',
        details: 'Details',
        cancellation: 'Cancellation',
        cancellationCause: 'Cancellation Cause',
        delete: 'Delete',
        cancell: 'Cancell',
        refresh: 'Refresh'
      }
    }
  },
  qualityGate: {
    Quality_gate: 'Quality Gate',
    Data_panel: 'Data Panel',
    tasks: 'Tasks',
    Role_management: 'Role Management'
  },
  paramsa: (_paramsa = {
    NO: 'NO',
    NAME: 'Name',
    ENNAME: 'En Name',
    FACETYPE: 'Face Type',
    SUPQUERY: 'Sup Query',
    INITDATA: 'Init Data',
    ICON: 'Icon',
    PARAMS: 'Params',
    CUSER: 'Cuser',
    classObjectNo: 'classObjectNo',
    classNodeObjectNo: 'classNodeObjectNo',
    viewNo: 'viewNo',
    objectNo: 'objectNo',
    objectGridNo: 'objectGridNo',
    objectRelationPageNo: 'objectRelationPageNo',
    condition: 'condition',
    reportId: 'reportId',
    reportName: 'reportName',
    isBddp: 'isBddp',
    checkProObjectNo: 'checkProObjectNo',
    checkProRelationShipNo: 'checkProRelationShipNo',
    checkResultObjectNo: 'checkResultObjectNo',
    checkResultRelationShipNo: 'checkResultRelationShipNo',
    add_mapping_field: 'add_mapping_field',
    add_content_field: 'add_content_field',
    sfield: 'sfield',
    tfield: 'tfield',
    objectPropertyPageNo: 'objectPropertyPageNo',
    startTimeField: 'startTimeField',
    endTimeField: 'endTimeField',
    typeField: 'typeField',
    contentField: 'contentField',
    statisticsField: 'statisticsField',
    isClass: 'isClass',
    dataClassField: 'dataClassField',
    classTabPosition: 'classTabPosition',
    objectPropertyNo: 'objectPropertyNo',
    mapFields: 'mapFields',
    contentFields: 'contentFields',
    url: 'url',
    sortFields: 'sortFields',
    RELATIONOBJECT: 'Relationship object',
    OBJECTA: 'Object A',
    OBJECTB: 'Object B',
    POBJECT: 'Parent object in relationship',
    STATE: 'State',
    EFFECTIVE: 'Is It Effective',
    VER: 'Version'
  }, _defineProperty(_paramsa, "SUPQUERY", 'Support Search'), _defineProperty(_paramsa, "SORTFIELDS", 'Sort Fields'), _defineProperty(_paramsa, "field", 'field'), _defineProperty(_paramsa, "sort", 'Positive Order'), _defineProperty(_paramsa, "CONTROLAUTH", 'Control Auth'), _paramsa),
  copyright: {
    Aboutus: 'About Us',
    title: 'InfinityQS Quality Management System',
    VersionNumber: 'Edition：v2.9.69.75',
    website: '  www.infinityqs.cn',
    //网址
    Copyright: 'Copyright © 2018-2020 IQS Corporation,All Rights Reserved',
    CopyrightZ: '盈飞无限管理软件 版权所有'
  },
  enterInput: {
    defectForm: 'Defect Form',
    input_tab: 'Input',
    message: {
      arabic_numerals_message: 'Please enter Arabic numerals',
      start_input_message: 'Please click to start entry!',
      inspection_completed_message: 'The entry has been completed and the inspection is complete!',
      input_complete_message: 'Input complete!',
      please_select_file: 'Please select a file',
      select_file_prompt1: 'Click or drag the file to this area to upload',
      select_file_prompt2: 'Support single or batch upload',
      please_complete_the_entry: 'Please complete the entry!',
      cleared_successfully: 'Cleared successfully',
      sampling_number_of_inspection_objects: 'The sampling quantity of inspection items must be greater than 0'
    },
    button: {
      clear_menu: 'Clear',
      clear_all: 'All',
      clear_selection: 'Selection',
      batch_menu: 'Batch',
      batch_input_ok: 'Batch Input OK',
      batch_input_ng: 'Batch Input NG',
      import_cache: 'Import Cache',
      switch_horizontal: 'Horizontal',
      switch_vertical: 'Vertical',
      start_input: 'Start',
      refresh_cache: 'Refresh',
      save_input: 'Save'
    },
    tooltip: {
      expand_drawer: 'Expand',
      collapse_drawer: 'Collapse',
      collapse_selected_row: 'Collapse selected row',
      expand_selected_row: 'Expand selected row',
      scroll_to_top: 'Scroll to top',
      scroll_to_bottom: 'Scroll to bottom',
      no_control_sample_number: 'Does not control the number of samples',
      the_number_of_qualified: 'The number of qualified',
      unqualified_number: 'Unqualified number',
      total_number_of_samples: 'Total number of samples'
    },
    confirm: {
      prompt: 'Prompt',
      re_input_all: 'Clear all caches and re-record, do you want to continue?',
      re_input_object: 'Clear the cache and re-record, whether to continue?',
      continue_input_next: 'Whether to continue to enter the next',
      input_next: 'Whether to enter the next'
    },
    placeholder: {
      sample_sn: 'Sample SN',
      detection_value: 'Detection Value'
    },
    modal: {
      import_cache_title: 'Import Cache'
    },
    inspectObjectFields: {
      SAMPLE_NUMBER: 'Number',
      SAMPLESN: 'Samplesn',
      INSRESULT: 'Insresult',
      RESULTREMARK: 'Result Remark'
    },
    inspectObjectTip: {
      inspection_equipment: 'Inspection equipment：',
      upper_limit: 'Upper limit:',
      missing_upper_limit_or_calculator: 'Missing upper limit value or calculator',
      target_value: 'Target value:',
      lower_limit: 'Lower limit:',
      missing_lower_limit_or_calculator: 'Missing lower limit value or calculator',
      determination: 'Determination:',
      color_box_desc: 'Color box description:\nBlue: current entry\nGreen: all qualified\nRed: Contains unqualified\nYellow: Optional items'
    },
    inspection: (_inspection = {
      templateID: 'Template ID',
      templateName: 'Template Name',
      COUNTTYPECANINPUT: 'Count Type Can Entered',
      PNCANINPUT: 'Part Number Can Entered',
      inspectionOrderCalculator: 'Inspection Order Calculator',
      inspectionProjectCalculator: 'Inspection Project Calculator',
      testResultCalculator: 'Test Result Calculator',
      isTakeEffect: 'is Take Effect',
      templateType: 'Template Type',
      reportTemplate: 'Report Template',
      inspectionTemplate: 'Inspection Template',
      creatReportTemplate: 'Creat Report Template',
      tableNO: 'Table Number',
      revision: 'Revision'
    }, _defineProperty(_inspection, "creatReportTemplate", 'creat Report Template'), _defineProperty(_inspection, "creatTemplate", 'creat Template'), _defineProperty(_inspection, "inspectionItem", 'Inspection Item'), _defineProperty(_inspection, "incompleteEntry", 'not entry completed'), _defineProperty(_inspection, "selectCategory", 'You need to select the project category'), _defineProperty(_inspection, "inputTestValue", 'Please enter the check value'), _defineProperty(_inspection, "formalError", 'The entered data is not in the correct format'), _defineProperty(_inspection, "greaterThan", 'Greater than the limit'), _defineProperty(_inspection, "lessThan", 'Less than the limit'), _defineProperty(_inspection, "upperLimitDisqualified", 'Equal to upper limit disqualified'), _defineProperty(_inspection, "lowerLimitDisqualified", 'Equal to the lower limit is disqualified'), _defineProperty(_inspection, "parameterEmpty", 'The parameter cannot be empty'), _defineProperty(_inspection, "notSaved", 'Input data is not saved'), _defineProperty(_inspection, "selectData", 'Please select data'), _defineProperty(_inspection, "clearAll", 'Clear All'), _defineProperty(_inspection, "removeSingle", 'Remove Single'), _defineProperty(_inspection, "submit", 'Submit'), _defineProperty(_inspection, "testValue", 'Test Value'), _defineProperty(_inspection, "conclusion", 'Conclusion'), _defineProperty(_inspection, "conclusionDescription", 'Conclusion the description'), _defineProperty(_inspection, "seriousBadNum", 'serious bad item'), _defineProperty(_inspection, "insNumber", 'Inspection Quantity'), _defineProperty(_inspection, "uq", 'Unqualified Quantity'), _defineProperty(_inspection, "insUq", 'Please fill in Unqualified Quantity'), _defineProperty(_inspection, "inputSeriousBadNum", 'Please fill in serious bad item'), _defineProperty(_inspection, "minorBadNum", 'minor bad item'), _defineProperty(_inspection, "inputMinorBadNum", 'Please fill in minor negative item'), _defineProperty(_inspection, "defectDescription", 'defect description'), _defineProperty(_inspection, "inputDefectDescription", 'Please fill in the undesirable description'), _defineProperty(_inspection, "scrapMethod", 'IQC scrap method'), _defineProperty(_inspection, "selectScrapMethod", 'Please select IQC scrap method'), _defineProperty(_inspection, "handlingOpinion", 'IQC handling opinion'), _defineProperty(_inspection, "selectHandlingOpinion", 'Please select IQC handling opinion'), _defineProperty(_inspection, "defectLevel", 'Defect Level'), _defineProperty(_inspection, "selectDefectLevel", 'Please select defect level'), _defineProperty(_inspection, "costCode", 'cost code'), _defineProperty(_inspection, "selectCostCode", 'Please select the cost code'), _defineProperty(_inspection, "report", {
      export_failed: 'Export failure',
      expoer_excel: 'Export Excel',
      expoer_pdf: 'Export PDF',
      start_flow: 'StartFlow',
      reject_recalibration: 'Reject',
      sqe_notes: 'SQE Opinion',
      field_select: 'field selection'
    }), _defineProperty(_inspection, "scriptCalculate", 'Script Calculate'), _defineProperty(_inspection, "entryComplete", 'Entry Complete'), _defineProperty(_inspection, "ts", 'Staging'), _defineProperty(_inspection, "cancel", 'cancel'), _defineProperty(_inspection, "hint", 'Hint'), _defineProperty(_inspection, "hintInfo", 'The input data is not saved. Is it temporarily stored？'), _inspection)
  },
  JsScriptFields: {
    JsScriptLibrary: 'JS script library',
    title: 'JS Script Field',
    no: 'NO',
    name: 'Name',
    rType: 'Return Type',
    remark: 'Remark',
    scriptValue: 'Script Value',
    scriptTest: 'Script Test',
    record: 'Input Parameter',
    runResult: 'Run Result',
    runScript: 'Run Script',
    creat: 'Creat',
    modify: 'Modify',
    delete: 'Delete',
    deleteScript: 'Delete Script',
    content: 'Content',
    tableName: 'Table Name',
    chineseName: 'Chinese Name'
  },
  viewFields: _defineProperty({
    timeliness: 'Timeliness Ratio',
    InspectionTimeliness: 'Inspection Timeliness',
    rejectRatio: 'Rate of Defective Batches',
    query: 'Query',
    year: 'year',
    month: 'month',
    week: 'week',
    dppm: 'Supplier DPPM',
    sample: 'Sample Inspection Completion Cycle',
    dataTable: 'Data Table',
    PlanTime: 'Plan Time',
    InspectionTime: 'Inspection Time',
    materialCN: 'Material Category Name',
    materialSN: 'Material Subclass Same',
    supplierName: 'Supplier Name',
    materialSeries: 'Material Series',
    time: 'Time',
    timeQuantum: 'time quantum',
    inspection: 'Proportion of Sampling Batches',
    the: 'The',
    incomingBatches: 'Incoming Batches',
    supplierRate: 'Supplier Compliance Rate',
    inspectionNum: 'Proportion of Sampling Quantity',
    choice: 'Choice',
    materialBatchesTotal: 'Total Number of Incoming Material Batches',
    timelinessTotal: 'Times of Inspection and Timely Batch',
    badnessTotal: 'Number of Defective Batches Inspected',
    inspectionTotal: 'Total Quantity of Inspection',
    badnessNum: 'Total Defective Quantity',
    inspectionLotsTotal: 'Total Number of Inspection Lots',
    inspectionNormalTotal: 'Number of Normal Inspection Batches',
    samplingTotal: 'Total Number of Sampling',
    supplierIncomingTotal: 'Batch Times of Incoming Material From Supplier',
    supplierQualifiedTotal: 'Times of Qualified Batches of Suppliers'
  }, "supplierRate", 'Supplier Compliance Rate'),
  dataDictionary: {
    title: 'Data Dictionary',
    create: 'Create ',
    module: 'Module',
    moduleCode: 'Module Code',
    classify: 'Classify',
    classifyCode: 'Classify Code',
    enName: 'English Name',
    cName: 'Chinese Name',
    mapValue: 'Map Value',
    color: 'color',
    index: 'index'
  }
};
exports.default = _default;